import UserModel from "../user/user.model";
import { ApiError } from "../../utils/ApiError";
import { HTTP_STATUS } from "../../constant/httpRequest";
import { COMPANY_MESSAGES } from "./company.constant";
import {
  registerCompanyinput,
  UpdateCompanyinput,
} from "./company.validations";
import { UserRole } from "../../enum/user.enum";
import CompanyModel from "./company.model";
import JobModel from "../job/job.model";
import {
  uploadToCloudinary,
  deleteMediaFromCloudinary,
} from "../../config/cloudinary.config";
import { CompanyUploadFiles } from "../../@types/company.types";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const registerCompanyService = async (
  data: registerCompanyinput,
  userId: string,
  role: string,
  files?: CompanyUploadFiles,
) => {
  if (role !== UserRole.RECRUITER) {
    throw new ApiError(
      HTTP_STATUS.FORBIDDEN,
      "Only employers can register a company.",
    );
  }

  const allFiles = [...(files?.logoImage ?? []), ...(files?.bannerImage ?? [])];

  if (allFiles.length) {
    const oversizedFile = allFiles.find((file) => file.size > MAX_FILE_SIZE);
    if (oversizedFile) {
      throw new ApiError(
        HTTP_STATUS.BAD_REQUEST,
        `File "${oversizedFile.originalname}" exceeds 5MB limit.`,
      );
    }
  }

  const user = await UserModel.findById(userId);

  if (!user) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, "User not found");
  }

  if (user.company) {
    throw new ApiError(
      HTTP_STATUS.CONFLICT,
      COMPANY_MESSAGES.COMPANY_ALREADY_REGISTERED_BY_USER,
    );
  }

  const existingCompanyEmail = await CompanyModel.findOne({
    email: data.email,
  });

  if (existingCompanyEmail) {
    throw new ApiError(
      HTTP_STATUS.CONFLICT,
      COMPANY_MESSAGES.COMPANY_ALREADY_EXISTS,
    );
  }

  const logoFile = files?.logoImage?.[0];
  const bannerFile = files?.bannerImage?.[0];

  const logoUpload = logoFile
    ? await uploadToCloudinary(logoFile.buffer, "companyLogo")
    : null;

  const bannerUpload = bannerFile
    ? await uploadToCloudinary(bannerFile.buffer, "companyBanner")
    : null;

  const company = await CompanyModel.create({
    ...data,
    createdBy: userId,
    logoImage: logoUpload
      ? { url: logoUpload.secure_url, publicId: logoUpload.public_id }
      : undefined,
    bannerImage: bannerUpload
      ? { url: bannerUpload.secure_url, publicId: bannerUpload.public_id }
      : undefined,
  });

  user.company = company._id;
  await user.save();

  return company;
};

export const updateCompanyService = async (
  data: UpdateCompanyinput,
  userId: string,
  role: string,
  files?: CompanyUploadFiles,
) => {
  if (role !== UserRole.RECRUITER) {
    throw new ApiError(
      HTTP_STATUS.FORBIDDEN,
      "Only employers can update a company.",
    );
  }

  const user = await UserModel.findById(userId);

  if (!user) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, "User not found");
  }

  if (!user.company) {
    throw new ApiError(
      HTTP_STATUS.NOT_FOUND,
      "You have not registered a company yet.",
    );
  }

  const existingCompany = await CompanyModel.findById(user.company);

  if (!existingCompany) {
    throw new ApiError(
      HTTP_STATUS.NOT_FOUND,
      COMPANY_MESSAGES.COMPANY_NOT_FOUND,
    );
  }

  if (data.email) {
    const existingCompanyEmail = await CompanyModel.findOne({
      email: data.email,
      _id: { $ne: user.company },
    });

    if (existingCompanyEmail) {
      throw new ApiError(
        HTTP_STATUS.CONFLICT,
        COMPANY_MESSAGES.COMPANY_ALREADY_EXISTS,
      );
    }
  }

  const allFiles = [...(files?.logoImage ?? []), ...(files?.bannerImage ?? [])];

  if (allFiles.length) {
    const oversizedFile = allFiles.find((file) => file.size > MAX_FILE_SIZE);
    if (oversizedFile) {
      throw new ApiError(
        HTTP_STATUS.BAD_REQUEST,
        `File "${oversizedFile.originalname}" exceeds 5MB limit.`,
      );
    }
  }

  const logoFile = files?.logoImage?.[0];
  const bannerFile = files?.bannerImage?.[0];

  const updatePayload: Record<string, any> = { ...data };

  if (logoFile) {
    const logoUpload = await uploadToCloudinary(logoFile.buffer, "companyLogo");

    if (existingCompany.logoImage?.publicId) {
      await deleteMediaFromCloudinary(existingCompany.logoImage.publicId);
    }

    updatePayload.logoImage = {
      url: logoUpload.secure_url,
      publicId: logoUpload.public_id,
    };
  }

  if (bannerFile) {
    const bannerUpload = await uploadToCloudinary(
      bannerFile.buffer,
      "companyBanner",
    );

    if (existingCompany.bannerImage?.publicId) {
      await deleteMediaFromCloudinary(existingCompany.bannerImage.publicId);
    }

    updatePayload.bannerImage = {
      url: bannerUpload.secure_url,
      publicId: bannerUpload.public_id,
    };
  }

  const updatedCompany = await CompanyModel.findByIdAndUpdate(
    user.company,
    { $set: updatePayload },
    { new: true, runValidators: true },
  );

  return updatedCompany;
};

export const getAllCompaniesService = async (page: number, limit: number) => {
  const skip = (page - 1) * limit;

  const companies = await CompanyModel.find()
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });

  const total = await CompanyModel.countDocuments();

  return {
    companies,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  };
};

export const getCompanyServiceBySlug = async (slug: string) => {
  if (!slug) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Company slug is required");
  }

  const company = await CompanyModel.findOne({ slug }).populate(
    "createdBy",
    "fullName email",
  );

  if (!company) {
    throw new ApiError(
      HTTP_STATUS.NOT_FOUND,
      COMPANY_MESSAGES.COMPANY_NOT_FOUND,
    );
  }

  return company;
};

export const deleteCompanyService = async (
  slug: string,
  userId: string,
  role: string,
) => {
  if (role !== UserRole.RECRUITER) {
    throw new ApiError(
      HTTP_STATUS.FORBIDDEN,
      "Only employers can delete a company.",
    );
  }

  if (!slug) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Company slug is required");
  }

  const company = await CompanyModel.findOne({ slug });

  if (!company) {
    throw new ApiError(
      HTTP_STATUS.NOT_FOUND,
      COMPANY_MESSAGES.COMPANY_NOT_FOUND,
    );
  }

  if (company.createdBy.toString() !== userId) {
    throw new ApiError(
      HTTP_STATUS.FORBIDDEN,
      "Not allowed to delete this company.",
    );
  }

  if (company.logoImage?.publicId) {
    await deleteMediaFromCloudinary(company.logoImage.publicId);
  }
  if (company.bannerImage?.publicId) {
    await deleteMediaFromCloudinary(company.bannerImage.publicId);
  }

  await JobModel.deleteMany({ company: company._id });

  await CompanyModel.findByIdAndDelete(company._id);

  await UserModel.findByIdAndUpdate(userId, { company: null });

  return null;
};

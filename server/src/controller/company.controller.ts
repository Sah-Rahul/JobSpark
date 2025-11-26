import TryCacthError from "../utils/TryCacth";
import { Response } from "express";
import { CompanyZodSchema } from "../zodValidations/companyZodSchema";
import { ApiError } from "../utils/ApiError";
import CompanyModel from "../models/company.model";
import { ApiResponse } from "../utils/ApiResponse";
import { uploadToCloudinary } from "../config/cloudinary.config";
import { CustomRequest } from "../middleware/auth.middleware";

export const createCompany = TryCacthError(
  async (req: CustomRequest, res: Response) => {
    const userId = req.user?.id;
    if (!userId) throw new ApiError(401, "Unauthorized user.");

    const parsed = CompanyZodSchema.safeParse(req.body);
    if (!parsed.success) {
      const errors = parsed.error.issues.map(
        (i) => `${i.path.join(".")}: ${i.message}`
      );
      throw new ApiError(400, "Invalid input", errors);
    }

    const {
      companyName,
      description,
      companySize,
      industry,
      location,
      website,
    } = parsed.data;

    const exists = await CompanyModel.findOne({ companyName });
    if (exists) throw new ApiError(409, "Company already exists.");

    const files = req.files as { [key: string]: Express.Multer.File[] };
    let logoUrl = parsed.data.logo || "";
    let bannerUrl = parsed.data.banner || "";

    if (files?.logo && files.logo.length > 0) {
      const result = await uploadToCloudinary(
        files.logo[0].buffer,
        "logo"
      );
      logoUrl = result.secure_url;
    }

    if (files?.banner && files.banner.length > 0) {
      const result = await uploadToCloudinary(
        files.banner[0].buffer,
        "banner"
      );
      bannerUrl = result.secure_url;
    }

    const createdCompany = await CompanyModel.create({
      companyName,
      description,
      companySize,
      industry,
      location,
      website,
      logo: logoUrl,
      banner: bannerUrl,
      createdBy: userId,
    });

    return res
      .status(201)
      .json(
        new ApiResponse(201, createdCompany, "Company created successfully.")
      );
  }
);

export const UpdateCompany = TryCacthError(
  async (req: CustomRequest, res: Response) => {
    const companyId = req.params.companyId;
    const userId = req.user?.id;

    if (!companyId) throw new ApiError(400, "Company ID is required.");
    if (!userId) throw new ApiError(401, "Unauthorized user.");

    const parsed = CompanyZodSchema.partial().safeParse(req.body);

    if (!parsed.success) {
      const errors = parsed.error.issues.map(
        (i) => `${i.path.join(".")}: ${i.message}`
      );
      throw new ApiError(400, "Invalid input", errors);
    }

    const updateData: any = { ...parsed.data };

    const company = await CompanyModel.findById(companyId);

    if (!company) throw new ApiError(404, "Company not found.");

    if (company.createdBy.toString() !== userId) {
      throw new ApiError(403, "You cannot update this company.");
    }

    const files = req.files as { [key: string]: Express.Multer.File[] };

    if (files?.logo) {
      const result = await uploadToCloudinary(files.logo[0].buffer, "logo");
      updateData.logo = result.secure_url;
    }

    if (files?.banner) {
      const result = await uploadToCloudinary(files.banner[0].buffer, "banner");
      updateData.banner = result.secure_url;
    }

    const updatedCompany = await CompanyModel.findByIdAndUpdate(
      companyId,
      updateData,
      { new: true }
    );

    return res
      .status(200)
      .json(
        new ApiResponse(200, updatedCompany, "Company updated successfully.")
      );
  }
);

export const deleteCompany = TryCacthError(
  async (req: CustomRequest, res: Response) => {
    const companyId = req.params.companyId;
    const userId = req.user?.id;

    if (!companyId) throw new ApiError(400, "Company ID is required");
    if (!userId) throw new ApiError(401, "Unauthorized user");

    const company = await CompanyModel.findById(companyId);
    if (!company) throw new ApiError(404, "Company not found");

    if (company.createdBy?.toString() !== userId)
      throw new ApiError(403, "You are not allowed to delete this company");

    await CompanyModel.findByIdAndDelete(companyId);

    return res
      .status(200)
      .json(new ApiResponse(200, null, "Company deleted successfully"));
  }
);

export const getCompanyDetails = TryCacthError(
  async (req: CustomRequest, res: Response) => {
    const companyId = req.params.companyId;

    if (!companyId) throw new ApiError(400, "Company ID is required");

    const company = await CompanyModel.findById(companyId);
    if (!company) throw new ApiError(404, "Company not found");

    return res
      .status(200)
      .json(new ApiResponse(200, company, "Company details fetched"));
  }
);

export const getAllCompanies = TryCacthError(
  async (req: CustomRequest, res: Response) => {
    const companies = await CompanyModel.find();

    return res
      .status(200)
      .json(new ApiResponse(200, companies, "All companies fetched"));
  }
);

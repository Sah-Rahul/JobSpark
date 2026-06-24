import UserModel from "../user/user.model";
import { ApiError } from "../../utils/ApiError";
import { HTTP_STATUS } from "../../constant/httpRequest";
import {
  deleteMediaFromCloudinary,
  uploadToCloudinary,
} from "../../config/cloudinary.config";
import { UpdateUserProfileInput } from "./user.validation";

export const updateUserProfileService = async (
  userId: string,
  updateData: UpdateUserProfileInput,
  avatarBuffer?: Buffer,
  resumeData?: { buffer: Buffer; originalname: string; size: string },
) => {
  const user = await UserModel.findById(userId);

  if (!user) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, "User not found");
  }

  if (avatarBuffer) {
    if (user.publicId) {
      await deleteMediaFromCloudinary(user.publicId);
    }
    const uploadResult = await uploadToCloudinary(
      avatarBuffer,
      "avatars",
      "image",
    );
    user.avatar = uploadResult.secure_url;
    user.publicId = uploadResult.public_id;
  }

  if (resumeData) {
    const uploadResult = await uploadToCloudinary(
      resumeData.buffer,
      "resumes",
      "raw",
    );

    user.cvResumes = user.cvResumes || [];

    user.cvResumes.push({
      name: resumeData.originalname,
      url: uploadResult.secure_url,
      publicId: uploadResult.public_id,
      size: resumeData.size,
      uploadedAt: new Date(),
    });
  }

  const allowedUpdates: (keyof UpdateUserProfileInput)[] = [
    "fullName",
    "title",
    "biography",
    "education",
    "experience",
    "nationality",
    "socialLinks",
  ];

  allowedUpdates.forEach((field) => {
    if (updateData[field] !== undefined) {
      (user as any)[field] = updateData[field];
    }
  });

  await user.save();

  return {
    fullName: user.fullName,
    title: user.title,
    avatar: user.avatar,
    publicId: user.publicId,
    education: user.education,
    experience: user.experience,
    nationality: user.nationality,
    biography: user.biography,
    socialLinks: user.socialLinks,
    cvResumes: user.cvResumes,
  };
};

export const deleteUserResumeService = async (
  userId: string,
  publicId: string,
) => {
  const user = await UserModel.findById(userId);

  if (!user) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, "User not found");
  }

  const resumeExists = user.cvResumes?.some((cv) => cv.publicId === publicId);

  if (!resumeExists) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, "Resume not found");
  }

  await deleteMediaFromCloudinary(publicId, "raw");

  user.cvResumes = user.cvResumes?.filter((cv) => cv.publicId !== publicId);

  await user.save();

  return {
    cvResumes: user.cvResumes,
  };
};

export const deleteSocialLinkService = async (
  userId: string,
  linkId: string,
) => {
  const updatedUser = await UserModel.findByIdAndUpdate(
    userId,
    {
      $pull: { socialLinks: { _id: linkId } },
    },
    { new: true },
  );

  if (!updatedUser) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, "User not found");
  }

  return {
    socialLinks: updatedUser.socialLinks,
  };
};

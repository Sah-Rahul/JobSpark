import dotenv from "dotenv";
dotenv.config();

import { v2 as cloudinary } from "cloudinary"; 

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

export interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
  [key: string]: any;
}

export const uploadToCloudinary = (
  fileBuffer: Buffer,
  folderName: string,
  resourceType: "image" | "raw" | "auto" = "image",
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: folderName,
        resource_type: resourceType,
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      },
    );

    uploadStream.end(fileBuffer);
  });
};

export const deleteMediaFromCloudinary = async (
  publicId: string,
  resourceType: "image" | "raw" | "auto" = "image",
) => {
  try {
    if (!publicId) throw new Error("Public ID is required for deletion");

    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: resourceType,
    });
    return result;
  } catch (error) {
    console.error("Cloudinary Delete Error:", error);
    throw error;
  }
};

import multer, { FileFilterCallback } from "multer";
import { Request } from "express";
import path from "path";

// Storage config
const storage = multer.memoryStorage();

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
) => {
  const ext = path.extname(file.originalname).toLowerCase();
  

  
  if (ext === ".jpg" || ext === ".jpeg" || ext === ".png" || ext === ".pdf") {
    return cb(null, true); 
  }

  cb(null, true);
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
});

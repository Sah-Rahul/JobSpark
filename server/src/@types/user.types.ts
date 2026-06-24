import mongoose, { Schema, Document, Types } from "mongoose";
import { AccountStatus, UserRole } from "../enum/user.enum";

export interface ICvResume {
  name: string;
  url: string;
  publicId: string;
  size: string;
  uploadedAt: Date;
}

export interface ISocialLink {
  platform: string;
  url: string;
}

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;

  role: UserRole;
  status: AccountStatus;

  avatar?: string;
  publicId?: string;

  isEmailVerified: boolean;
  isWelcomeEmailSent: boolean;

  emailVerificationToken?: string;
  emailVerificationExpires?: Date;

  education?: string;
  experience?: string;
  company?: Types.ObjectId;

  title?: string;
  cvResumes?: ICvResume[];
  socialLinks?: ISocialLink[];

  nationality?: string;
  biography?: string;

  passwordResetToken?: string;
  passwordResetExpires?: Date;

  lastLogin?: Date;

  createdAt: Date;
  updatedAt: Date;
}

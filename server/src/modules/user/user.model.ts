import mongoose, { Schema, Document } from "mongoose";
import { AccountStatus, UserRole } from "../../enum/user.enum";

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  phoneNumber?: string;

  role: UserRole;
  status: AccountStatus;

  avatar?: string;
  publicId?: string;

  isEmailVerified: boolean;
  isWelcomeEmailSent: boolean;

  emailVerificationToken?: string;
  emailVerificationExpires?: Date;

  passwordResetToken?: string;
  passwordResetExpires?: Date;

  lastLogin?: Date;

  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    phoneNumber: {
      type: String,
    },

    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.JOBSEEKER,
    },

    status: {
      type: String,
      enum: Object.values(AccountStatus),
      default: AccountStatus.PENDING,
    },

    avatar: {
      type: String,
    },

    publicId: {
      type: String,
    },

    isEmailVerified: {
      type: Boolean,
      default: false,
    },

    isWelcomeEmailSent: {
      type: Boolean,
      default: false,
    },

    emailVerificationToken: {
      type: String,
      select: false,
    },

    emailVerificationExpires: {
      type: Date,
      select: false,
    },

    passwordResetToken: {
      type: String,
      select: false,
    },

    passwordResetExpires: {
      type: Date,
      select: false,
    },

    lastLogin: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.index({ email: 1 });
userSchema.index({ role: 1, status: 1 });

const UserModel = mongoose.model<IUser>("User", userSchema);

export default UserModel;
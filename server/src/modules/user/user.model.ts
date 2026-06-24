import mongoose, { Schema, Document } from "mongoose";
import { AccountStatus, UserRole } from "../../enum/user.enum";
import { Education, Experience } from "../../constant/user.constant";
import { ICvResume, ISocialLink, IUser } from "../../@types/user.types";

const cvResumeSchema = new Schema<ICvResume>({
  name: { type: String, required: true },
  url: { type: String, required: true },
  publicId: { type: String, required: true },
  size: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

const socialLinkSchema = new Schema<ISocialLink>({
  platform: { type: String, required: true },
  url: { type: String, required: true },
});

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

    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      default: null,
    },

    avatar: { type: String },
    publicId: { type: String },

    isEmailVerified: { type: Boolean, default: false },
    isWelcomeEmailSent: { type: Boolean, default: false },

    emailVerificationToken: { type: String, select: false },
    emailVerificationExpires: { type: Date, select: false },

    education: {
      type: String,
      enum: Object.values(Education),
    },

    experience: {
      type: String,
      enum: Object.values(Experience),
    },

    title: { type: String },

    cvResumes: { type: [cvResumeSchema], default: [] },
    socialLinks: { type: [socialLinkSchema], default: [] },

    nationality: { type: String },
    biography: { type: String },

    passwordResetToken: { type: String, select: false },
    passwordResetExpires: { type: Date, select: false },

    lastLogin: { type: Date },
  },
  {
    timestamps: true,
  },
);

userSchema.index({ role: 1, status: 1 });

const UserModel = mongoose.model<IUser>("User", userSchema);

export default UserModel;
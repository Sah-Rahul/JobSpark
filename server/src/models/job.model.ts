import mongoose, { Schema } from "mongoose";
import { JobCategories } from "../config/constant";

const jobSchema = new Schema(
  {
    recruiter: {
      type: Schema.Types.ObjectId,
      ref: "Recruiter",
      required: true,
    },

    jobTitle: { type: String, required: true, trim: true },
    jobDescription: { type: String, required: true },

    skillsRequired: [String],

    salaryRange: {
      min: Number,
      max: Number,
    },

    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Remote", "Internship"],
      default: "Full-time",
    },

    experienceRequired: String,
    location: String,

    status: {
      type: String,
      enum: ["Active", "Closed"],
      default: "Active",
    },

    KeyResponsibilities: {
      type: [String],
      default: [],
    },
    ProfessionalSkills: {
      type: [String],
      default: [],
    },
    Degree: {
      type: String,
      default: "",
    },
    Experience: {
      type: String,
      default: "",
    },
    Category: {
      type: String,
      enum: JobCategories,
      default: "Other",
    },
    appliedUsers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const JobModel = mongoose.model("Job", jobSchema);
export default JobModel;

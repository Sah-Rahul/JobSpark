import { Schema, model } from "mongoose";
import { IJob } from "../../@types/job.types";
import {
  JobRole,
  JobType,
  JobLevel,
  SalaryType,
  JobStatus,
} from "../../enum/job.enum";
import slugify from "slugify";

const jobSchema = new Schema<IJob>(
  {
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },

    jobTags: {
      type: [String],
      default: [],
    },

    jobRole: {
      type: String,
      enum: Object.values(JobRole),
      required: true,
      index: true,
    },

    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
      index: true,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    minSalary: {
      type: Number,
      required: true,
      min: 0,
    },

    maxSalary: {
      type: Number,
      required: true,
      min: 0,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },

    salaryType: {
      type: String,
      enum: Object.values(SalaryType),
      required: true,
    },

    education: {
      type: String,
    },

    experience: {
      type: Number,
      required: true,
      min: 0,
    },

    jobType: {
      type: String,
      enum: Object.values(JobType),
      required: true,
    },

    jobLevel: {
      type: String,
      enum: Object.values(JobLevel),
      required: true,
    },

    vacancy: {
      type: Number,
      required: true,
      min: 1,
    },

    expirationDate: {
      type: Date,
      required: true,
    },

    jobDescription: {
      type: String,
      required: true,
    },

    jobResponsibilities: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: Object.values(JobStatus),
      default: JobStatus.DRAFT,
    },
  },
  {
    timestamps: true,
  },
);

jobSchema.index({ status: 1, jobType: 1, jobRole: 1 });

jobSchema.pre("save", function () {
  if (this.isModified("jobTitle")) {
    this.slug = slugify(this.jobTitle, {
      lower: true,
      strict: true,
      trim: true,
    });
  }
});

const jobModel = model<IJob>("Job", jobSchema);
export default jobModel;

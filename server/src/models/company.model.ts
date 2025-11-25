import mongoose, { Schema } from "mongoose";

const companySchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    logo: {
      type: String,
      default: "",
    },
    banner: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    FoundedYear: {
      type: Number,
    },
    CompanyBenefits: {
      type: [String],
      default: [],
    },
    CompanyVision: {
      default: "",
      type: String,
    },
    OrganizationType: {
      type: String,
      default: "",
    },
    industry: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },
    website: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: String,
      default: "",
    },
    companySize: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const CompanyModel = mongoose.model("Company", companySchema);
export default CompanyModel;

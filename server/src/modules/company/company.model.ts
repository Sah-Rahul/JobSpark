import { model, Schema } from "mongoose";
import { ICompany, ICompanyImage } from "../../@types/company.types";
import { OrganizationType, TeamSize } from "../../enum/company.enum";
import slugify from "slugify";

const companyImageSchema = new Schema<ICompanyImage>(
  {
    url: { type: String, required: true },
    publicId: { type: String, required: true },
  },
  { _id: false },
);

const companySchema = new Schema<ICompany>(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    logoImage: {
      type: companyImageSchema,
      required: false,
    },

    bannerImage: {
      type: companyImageSchema,
      required: false,
    },

    companyAboutUs: {
      type: String,
      required: true,
    },

    organizationType: {
      type: String,
      enum: Object.values(OrganizationType),
      required: true,
    },

    industryType: {
      type: String,
      required: true,
    },

    teamSize: {
      type: String,
      enum: Object.values(TeamSize),
      required: true,
    },

    yearOfEstablishment: {
      type: Number,
      min: 1800,
      max: new Date().getFullYear(),
      required: true,
    },

    companyWebsite: {
      type: String,
      trim: true,
    },

    companyVision: {
      type: String,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    companySocialMedia: {
      type: [String],
      default: [],
    },

    mapLocation: {
      type: String,
    },

    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      index: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

companySchema.virtual("totalJobsPosted", {
  ref: "Job",
  localField: "_id",
  foreignField: "company",
  count: true,
});

companySchema.pre("save", function () {
  if (this.isModified("companyName")) {
    this.slug = slugify(this.companyName, {
      lower: true,
      strict: true,
      trim: true,
    });
  }
});

companySchema.pre("findOneAndUpdate", function () {
  const update = this.getUpdate() as Record<string, any>;

  const newCompanyName = update?.companyName ?? update?.$set?.companyName;

  if (newCompanyName) {
    const newSlug = slugify(newCompanyName, {
      lower: true,
      strict: true,
      trim: true,
    });

    if (update.$set) {
      update.$set.slug = newSlug;
    } else {
      update.slug = newSlug;
    }
  }
});

const CompanyModel = model<ICompany>("Company", companySchema);

export default CompanyModel;

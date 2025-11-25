import mongoose, { Schema } from "mongoose";

const recruiterSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },

    position: { type: String, default: "HR" },

    permissions: {
      type: [String],
      default: ["post_job", "manage_applications"],
    },
  },
  { timestamps: true }
);

const RecruiterModel = mongoose.model("Recruiter", recruiterSchema);
export default RecruiterModel;

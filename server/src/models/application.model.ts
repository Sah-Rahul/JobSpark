import mongoose, { Schema } from "mongoose";

const jobApplicationSchema = new Schema(
  {
    job: {
      type: Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["Applied", "Shortlisted", "Rejected", "Selected"],
      default: "Applied",
    },
  },
  { timestamps: true }
);

const JobApplicationModel = mongoose.model("JobApplication", jobApplicationSchema);
export default JobApplicationModel;

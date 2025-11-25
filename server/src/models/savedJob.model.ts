import mongoose, { Schema } from "mongoose";

const savedJobSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    job: {
      type: Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
  },
  { timestamps: true }
);

const SavedJobModel = mongoose.model("SavedJob", savedJobSchema);
export default SavedJobModel;

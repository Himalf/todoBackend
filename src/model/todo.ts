import mongoose from "mongoose";
const todoSchema = new mongoose.Schema(
  {
    task: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
  },
  { timestamps: true }
);
export default mongoose.model("TodoSchema", todoSchema);

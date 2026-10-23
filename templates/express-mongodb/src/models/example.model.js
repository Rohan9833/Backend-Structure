import mongoose from "mongoose";

const exampleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120
    }
  },
  { timestamps: true }
);

export default mongoose.models.Example
  ?? mongoose.model("Example", exampleSchema);

import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: 120,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      maxlength: 20,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    travelMonth: {
      type: String,
      required: [true, "Travel month is required"],
      enum: {
        values: ["September", "October", "November", "December", "Next Year"],
        message: "Please select a valid travel month.",
      },
    },
    source: {
      type: String,
      default: "maldives-landing-page",
    },
    status: {
      type: String,
      enum: ["new", "contacted", "converted", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Landing-page-queries", leadSchema);

import mongoose from "mongoose";

export async function connectDatabase(uri) {
  if (!uri) throw new Error("MONGODB_URI is required to connect to MongoDB.");
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri);
  console.log("MongoDB connected.");
}

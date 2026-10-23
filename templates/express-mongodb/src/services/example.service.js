import Example from "../models/example.model.js";

export async function listExamples() {
  return Example.find().sort({ createdAt: -1 }).lean();
}

export async function addExample(data) {
  const item = await Example.create(data);
  return item.toObject();
}

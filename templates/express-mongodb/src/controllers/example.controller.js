import { listExamples, addExample } from "../services/example.service.js";

export async function getExamples(_req, res, next) {
  try {
    const items = await listExamples();
    res.json({ success: true, data: items });
  } catch (error) {
    next(error);
  }
}

export async function createExample(req, res, next) {
  try {
    const { name } = req.body ?? {};
    if (typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "A non-empty name is required."
      });
    }
    const item = await addExample({ name: name.trim() });
    return res.status(201).json({ success: true, data: item });
  } catch (error) {
    next(error);
  }
}

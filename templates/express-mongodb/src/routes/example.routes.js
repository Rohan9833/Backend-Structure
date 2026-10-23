import { Router } from "express";
import { getExamples, createExample } from "../controllers/example.controller.js";

const router = Router();

router.get("/", getExamples);
router.post("/", createExample);

export default router;

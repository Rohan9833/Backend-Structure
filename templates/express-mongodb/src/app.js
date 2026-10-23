import express from "express";
import cors from "cors";
import helmet from "helmet";
import healthRoutes from "./routes/health.routes.js";
import exampleRoutes from "./routes/example.routes.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_ORIGIN
    ? process.env.CLIENT_ORIGIN.split(",").map((origin) => origin.trim())
    : true
}));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/health", healthRoutes);
app.use("/api/examples", exampleRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;

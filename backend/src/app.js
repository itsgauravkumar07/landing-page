import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import leadRoutes from "./routes/leadRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "*",
};

app.use(cors(corsOptions));
app.use(express.json());

// Basic rate limiting on the public lead-submission endpoint
const leadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30,
  message: { success: false, message: "Too many requests, please try again later." },
});

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Maldives Escape API is running." });
});

app.use("/api/leads", leadLimiter, leadRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;

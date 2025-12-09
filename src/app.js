import express from "express";
import cors from "cors";
import emailRoutes from "./routes/emailRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/email", emailRoutes);

export default app;

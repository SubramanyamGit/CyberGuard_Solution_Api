import express from "express";
import cors from "cors";
import emailRoutes from "./routes/emailRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173", // Vite dev server
  "https://cybergaurdsoltions.netlify.app/" // deployed frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site does not allow access from the specified Origin.`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
// Routes
app.use("/api/email", emailRoutes);

export default app;

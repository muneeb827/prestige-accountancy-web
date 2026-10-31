import express from "express";
import cors from "cors";
import { config } from "./config/environment.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: [
      config.clientUrl,
      "https://actvise-accountancy-web.vercel.app",
      "https://actvise-accountancy-services.vercel.app",
      "https://actvise.co.uk",
      "http://localhost:3000"
    ],
    credentials: true,
  })
);

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "Actvise Accountancy Backend API",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use("/api", contactRoutes);

// 404 Handler
app.use((_req, res) => {
  res.status(404).json({ error: "Endpoint not found on Actvise API" });
});

// Start Server
if (process.env.NODE_ENV !== "test") {
  app.listen(config.port, () => {
    console.log(`===============================================`);
    console.log(` Actvise Accountancy Services - Backend API `);
    console.log(` Running on port: ${config.port}`);
    console.log(` Environment: ${config.nodeEnv}`);
    console.log(` Health check: http://localhost:${config.port}/api/health`);
    console.log(`===============================================`);
  });
}

export default app;

import { Router } from "express";
import { handleContactSubmission } from "../controllers/contactController.js";

const router = Router();

// POST /api/contact - Lead submission from frontend contact form
router.post("/contact", handleContactSubmission);

// POST /api/quote - Tailored quote submission
router.post("/quote", handleContactSubmission);

export default router;

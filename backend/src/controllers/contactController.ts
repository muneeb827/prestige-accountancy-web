import { Request, Response } from "express";
import { IInquiry } from "../models/Inquiry.js";
import { sendLeadNotification } from "../services/emailService.js";

export async function handleContactSubmission(req: Request, res: Response) {
  try {
    const { firstName, lastName, email, phone, service, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Please provide your first name, email address and a message.",
      });
    }

    const newInquiry: IInquiry = {
      firstName: firstName.trim(),
      lastName: lastName?.trim() || "",
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || "",
      service: service || "General Consultation",
      message: message.trim(),
      source: "contact-form",
      status: "pending",
      createdAt: new Date(),
    };

    console.log(`[Contact Controller] New Lead received from: ${newInquiry.email}`);

    // Trigger email notification service
    try {
      await sendLeadNotification(newInquiry);
    } catch (emailErr) {
      console.error("[Contact Controller] Email sending warning:", emailErr);
    }

    return res.status(200).json({
      success: true,
      message: "Thank you! Your message has been received by Prestige Accountancy Services. An accountant will contact you within 24 business hours.",
      lead: {
        firstName: newInquiry.firstName,
        service: newInquiry.service,
        receivedAt: newInquiry.createdAt,
      },
    });
  } catch (error) {
    console.error("[Contact Controller] Internal Error:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error. Please call our office directly at +44 7949 446368.",
    });
  }
}

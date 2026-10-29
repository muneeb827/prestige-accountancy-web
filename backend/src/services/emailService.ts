import nodemailer from "nodemailer";
import { config } from "../config/environment.js";
import { IInquiry } from "../models/Inquiry.js";

export async function sendLeadNotification(inquiry: IInquiry) {
  // If SMTP is not yet configured with real credentials, log to console
  if (!config.email.host || !config.email.user) {
    console.log("[Email Service] SMTP not configured. Lead details logged below:");
    console.log(JSON.stringify(inquiry, null, 2));
    return true;
  }

  const transporter = nodemailer.createTransport({
    host: config.email.host,
    port: config.email.port,
    secure: config.email.port === 465,
    auth: {
      user: config.email.user,
      pass: config.email.pass,
    },
  });

  const mailOptions = {
    from: `"Actvise Web Inquiries" <${config.email.user}>`,
    to: config.email.receiver,
    replyTo: inquiry.email,
    subject: `New Lead: ${inquiry.firstName} ${inquiry.lastName || ""} - ${inquiry.service || "General Inquiry"}`,
    html: `
      <h2>New Website Consultation Inquiry</h2>
      <p><strong>Name:</strong> ${inquiry.firstName} ${inquiry.lastName || ""}</p>
      <p><strong>Email:</strong> ${inquiry.email}</p>
      <p><strong>Phone:</strong> ${inquiry.phone || "Not provided"}</p>
      <p><strong>Service of Interest:</strong> ${inquiry.service || "General Consultation"}</p>
      <p><strong>Message:</strong></p>
      <p>${inquiry.message.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>Received on: ${inquiry.createdAt.toLocaleString("en-GB")}</small></p>
    `,
  };

  await transporter.sendMail(mailOptions);
  return true;
}

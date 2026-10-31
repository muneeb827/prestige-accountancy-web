import nodemailer from "nodemailer";
import { config } from "../config/environment.js";
import { IInquiry } from "../models/Inquiry.js";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeHeader(str: string): string {
  return str.replace(/[\r\n]+/g, " ").trim();
}

export async function sendLeadNotification(inquiry: IInquiry) {
  // If SMTP is not yet configured with real credentials, log securely to console
  if (!config.email.host || !config.email.pass) {
    console.log("[Email Service] SMTP credentials (pass) not configured. Lead details logged below:");
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

  const safeFullName = sanitizeHeader(`${inquiry.firstName} ${inquiry.lastName || ""}`.trim());
  const safeEmail = sanitizeHeader(inquiry.email);
  const safePhone = sanitizeHeader(inquiry.phone || "");
  const safeService = sanitizeHeader(inquiry.service || "General Consultation");
  const safeMessage = escapeHtml(inquiry.message);

  const ukTime = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    dateStyle: "full",
    timeStyle: "medium"
  }).format(inquiry.createdAt || new Date());

  const mailOptions = {
    from: `"Actvise Web Inquiries" <${config.email.user}>`,
    to: config.email.receiver,
    replyTo: safeEmail,
    subject: `New Lead: ${safeFullName} - ${safeService}`,
    text: `New Lead Received from ${safeFullName}\nEmail: ${safeEmail}\nPhone: ${safePhone || "Not provided"}\nService: ${safeService}\nTime: ${ukTime}\n\nMessage:\n${inquiry.message}`,
    html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Website Consultation Inquiry</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
    <div style="background-color: #00368C; padding: 28px 32px; text-align: left; border-bottom: 4px solid #2B7EFE;">
      <h1 style="color: #ffffff; margin: 0 0 6px 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px;">ACTVISE ACCOUNTANCY SERVICES</h1>
      <p style="color: #93c5fd; margin: 0; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Guardians of Your Finances | Web Consultation Lead</p>
    </div>
    <div style="padding: 32px;">
      <div style="background-color: #eff6ff; border-left: 4px solid #2B7EFE; padding: 12px 16px; margin-bottom: 24px; border-radius: 0 6px 6px 0;">
        <p style="margin: 0; color: #1e3a8a; font-size: 14px; font-weight: 600;">
          A new consultation inquiry has been submitted through <strong>actvise.co.uk</strong>.
        </p>
      </div>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 140px;">Client Name:</td>
          <td style="padding: 10px 0; color: #0f172a; font-weight: 700;">${safeFullName}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Email Address:</td>
          <td style="padding: 10px 0;">
            <a href="mailto:${safeEmail}" style="color: #00368C; font-weight: 700; text-decoration: none;">${safeEmail}</a>
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Phone Number:</td>
          <td style="padding: 10px 0;">
            <a href="tel:${safePhone.replace(/\s+/g, "")}" style="color: #00368C; font-weight: 600; text-decoration: none;">${safePhone || "Not provided"}</a>
          </td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Service Requested:</td>
          <td style="padding: 10px 0;">
            <span style="background-color: #dbeafe; color: #1e40af; padding: 4px 10px; border-radius: 9999px; font-weight: 700; font-size: 12px;">
              ${safeService}
            </span>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Submission Time:</td>
          <td style="padding: 10px 0; color: #334155; font-size: 13px;">${ukTime}</td>
        </tr>
      </table>
      <div style="margin-bottom: 28px;">
        <h3 style="color: #334155; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 8px 0;">Client Message / Details:</h3>
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
${safeMessage}
        </div>
      </div>
      <div style="text-align: center; margin: 28px 0 16px 0;">
        <a href="mailto:${safeEmail}?subject=Re:%20Actvise%20Accountancy%20Inquiry%20-%20${encodeURIComponent(safeService)}" 
           style="background-color: #00368C; color: #ffffff; padding: 12px 28px; border-radius: 8px; font-weight: 700; text-decoration: none; display: inline-block; font-size: 14px;">
          Reply Directly to Client (${safeEmail})
        </a>
      </div>
    </div>
    <div style="background-color: #0f172a; padding: 20px 32px; text-align: center; color: #94a3b8; font-size: 12px; line-height: 1.5;">
      <p style="margin: 0 0 4px 0; color: #ffffff; font-weight: 600;">Actvise Accountancy &amp; Tax Services Ltd</p>
      <p style="margin: 0 0 8px 0;">9 Blackmoorfoot Road, Crosland Moor, Huddersfield, HD4 5AQ | +44 7949 446368</p>
      <p style="margin: 0; color: #64748b;">This notification was delivered to ${config.email.receiver} via Actvise Web Notification Service.</p>
    </div>
  </div>
</body>
</html>`,
  };

  await transporter.sendMail(mailOptions);
  return true;
}

import { NextResponse } from "next/server";
import { sendInquiryNotification } from "@/lib/email";
import { validateUKPhoneNumber } from "@/lib/validation";

// Simple in-memory rate limiting map (IP -> Array of timestamps)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  
  // Filter out timestamps outside the window
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  
  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }
  
  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    // 1. Extract Client IP for Security & Rate Limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";
    const userAgent = request.headers.get("user-agent") || "Unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { 
          error: "Too many submissions received from this network. Please wait a few minutes or call us directly." 
        },
        { status: 429 }
      );
    }

    const data = await request.json();
    const { firstName, lastName, email, phone, service, message, honeypot } = data;

    // 2. Anti-spam honeypot check (hidden field filled by automated bots)
    if (honeypot && String(honeypot).trim().length > 0) {
      console.warn(`[Anti-Spam] Bot detected and blocked via honeypot from IP: ${ip}`);
      // Return 200 OK to silently confuse bots without sending email
      return NextResponse.json(
        { success: true, message: "Inquiry received." },
        { status: 200 }
      );
    }

    // 3. Input Validation
    if (!firstName || typeof firstName !== "string" || firstName.trim().length === 0) {
      return NextResponse.json(
        { error: "Please enter your first name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address (e.g. name@domain.co.uk)." },
        { status: 400 }
      );
    }

    // Validate UK Phone Number (Mandatory for UK business consultations)
    const phoneValidation = validateUKPhoneNumber(phone);
    if (!phoneValidation.isValid) {
      return NextResponse.json(
        { error: phoneValidation.error || "Please enter a valid UK phone number (e.g. +44 1234 567890 or 07123 456789)." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Please enter a brief message describing your requirements." },
        { status: 400 }
      );
    }

    // Length guards to prevent buffer/payload abuse
    if (firstName.length > 100 || (lastName && lastName.length > 100)) {
      return NextResponse.json(
        { error: "Name exceeds the maximum allowed length." },
        { status: 400 }
      );
    }

    if (email.length > 254) {
      return NextResponse.json(
        { error: "Email exceeds the maximum allowed length." },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long (maximum 5,000 characters)." },
        { status: 400 }
      );
    }

    // 4. Send Nodemailer Email Notification to info@actvise.co.uk
    const leadData = {
      firstName: firstName.trim(),
      lastName: lastName ? String(lastName).trim() : "",
      email: email.trim().toLowerCase(),
      phone: phoneValidation.formatted || String(phone).trim(),
      service: service ? String(service).trim() : "General Consultation",
      message: message.trim(),
      ip,
      userAgent
    };

    console.log(`[Lead Captured] New inquiry from ${leadData.firstName} (${leadData.email}) - Service: ${leadData.service}`);

    try {
      await sendInquiryNotification(leadData);
    } catch (mailError) {
      console.error("[Email Notification Error] Failed to dispatch email via Nodemailer:", mailError);
      // We do not fail the user's form response if SMTP fails, so the lead is never turned away
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you! Your inquiry has been sent to Actvise Accountancy & Tax Services. A qualified accountant will contact you within 24 business hours." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error] Unexpected error processing request:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please call us directly on +44 7949 446368." },
      { status: 500 }
    );
  }
}

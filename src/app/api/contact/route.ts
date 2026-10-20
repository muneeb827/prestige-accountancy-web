import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, phone, service, message } = data;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email address, and a short message." },
        { status: 400 }
      );
    }

    // In a full MERN production setup with MongoDB:
    // await dbConnect();
    // await Inquiry.create({ firstName, lastName, email, phone, service, message, createdAt: new Date() });
    // Or send via Nodemailer / SendGrid to Prestige inbox

    console.log("New Prestige Accountancy Lead Captured:", {
      name: `${firstName} ${lastName || ""}`.trim(),
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you! Your message has been received by Prestige Accountancy Services. An accountant will contact you within 24 business hours." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try calling us directly." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const destinationEmail = "evascojustine@gmail.com";

export async function POST(request: Request) {
  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY in environment variables." },
      { status: 500 },
    );
  }

  const body = (await request.json()) as {
    name?: string;
    email?: string;
    message?: string;
  };

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  try {
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [destinationEmail],
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 },
    );
  }
}

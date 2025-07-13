import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, joinMailingList, volunteer, comments } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const message = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: "contact@therighttoai.org, rashidmushkani@gmail.com",
    subject: "New Right to AI endorsement",
    text: `Name: ${name}\nEmail: ${email}\nJoin mailing list: ${joinMailingList}\nVolunteer: ${volunteer}\nComments: ${comments || ""}`,
  };

  try {
    await transporter.sendMail(message);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
import { Resend } from 'resend';
import { EmailTemplate } from "../../components/EmailTemplate";
import { NextResponse } from "next/server";

// Initialize Resend with API Key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { from, subject, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: [process.env.TO_EMAIL],
      reply_to: from, 
      subject: subject,
      react: <EmailTemplate From={from} Subject={subject} Message={message} />,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
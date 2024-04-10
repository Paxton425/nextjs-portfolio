import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../../components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { from, subject, message } = await req.json();
  console.log(from, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, from],
      subject: subject,
      react: <EmailTemplate From={from} Subject={subject} Message={message} />,
    });
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}

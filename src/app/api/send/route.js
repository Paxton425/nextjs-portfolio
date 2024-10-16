import { NextResponse } from "next/server";
import { EmailTemplate } from "../../components/EmailTemplate";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req, res) {
  const { from, subject, message } = await req.json();
  try {
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: subject,
      html: <EmailTemplate From={from} Subject={subject} Message={message} />,
    };
    const data = await transporter.sendMail(mailOptions);
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
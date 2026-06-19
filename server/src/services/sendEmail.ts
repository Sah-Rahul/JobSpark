import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";
import { EmailVerificationPayload } from "../constant/queue.constant";
import { verifyEmail } from "../emailTemplates/verifyEmail";

interface SendEmailProps {
  email: string;
  subject: string;
  html: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

 

export const sendEmail = async ({ email, subject, html }: SendEmailProps) => {
  try {
    console.log("📧 Attempting to send to:", email);
    const result = await transporter.sendMail({
      from: `"JobSpark" <${process.env.SMTP_MAIL}>`,
      to: email,
      subject,
      html,
    });
  } catch (error) {
    throw error;
  }
};

export const sendVerificationEmail = async (
  payload: EmailVerificationPayload,
) => {
  const verifyUrl = `${process.env.CLIENT}/verify-email?token=${payload.token}`;

  await sendEmail({
    email: payload.email,
    subject: "Verify your email — JobSpark",
    html: verifyEmail(verifyUrl),
  });
};

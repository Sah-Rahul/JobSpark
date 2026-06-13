import nodemailer from "nodemailer";
import { EmailVerificationPayload } from "../constant/queue.constant";
import { verifyEmail } from "../emailTemplates/verifyEmail";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendVerificationEmail = async (
  payload: EmailVerificationPayload,
): Promise<void> => {
  const verifyUrl = `${process.env.CLIENT}/verify-email?token=${payload.token}`;

  await transporter.sendMail({
    from: `"JobSpark" <${process.env.SMTP_USER}>`,
    to: payload.email,
    subject: "Verify your email — JobSpark",
    html: verifyEmail(payload.token),
  });
};

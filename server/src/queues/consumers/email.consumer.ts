import {
  QUEUES,
  EmailVerificationPayload,
  PasswordResetPayload,
  WelcomePayload,
} from "../../constant/queue.constant";
import { ForgotPasswordEmailTemplate } from "../../emailTemplates/ForgotPasswordEmailTemplate";

import { WelcomeEmailTemplate } from "../../emailTemplates/welcomeEmail";
import { sendEmail, sendVerificationEmail } from "../../services/sendEmail";
import { createConsumer } from "./base.consumer";

export const startVerificationEmailConsumer = async (): Promise<void> => {
  await createConsumer<EmailVerificationPayload>(
    QUEUES.EMAIL_VERIFICATION,
    async (payload) => {
      await sendVerificationEmail(payload);
    },
  );
};

export const startPasswordResetConsumer = async (): Promise<void> => {
  await createConsumer<PasswordResetPayload>(
    QUEUES.PASSWORD_RESET,
    async (payload) => {
      const resetUrl = `${process.env.CLIENT}/auth/reset-password?token=${payload.token}`;
      await sendEmail({
        email: payload.email,
        subject: "Reset your password — JobSpark",
        html: ForgotPasswordEmailTemplate(payload.fullName, resetUrl),
      });
    },
  );
};

export const startWelcomeEmailConsumer = async (): Promise<void> => {
  await createConsumer<WelcomePayload>(
    QUEUES.WELCOME_EMAIL,
    async (payload) => {
      await sendEmail({
        email: payload.email,
        subject: "Welcome to JobSpark! 🎉",
        html: WelcomeEmailTemplate(payload.fullName, payload.dashboardURL),
      });
    },
  );
};

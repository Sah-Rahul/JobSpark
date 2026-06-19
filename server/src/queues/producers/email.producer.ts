import {
  QUEUES,
  EmailVerificationPayload,
  PasswordResetPayload,
  WelcomePayload,
} from "../../constant/queue.constant";
import { createProducer } from "./base.producer";

export const produceVerificationEmail = async (
  payload: EmailVerificationPayload,
): Promise<void> => {
  await createProducer<EmailVerificationPayload>(
    QUEUES.EMAIL_VERIFICATION,
    payload,
  );
};

export const producePasswordResetEmail = async (
  payload: PasswordResetPayload,
): Promise<void> => {
  await createProducer<PasswordResetPayload>(QUEUES.PASSWORD_RESET, payload);
};

export const produceWelcomeEmail = async (
  payload: WelcomePayload,
): Promise<void> => {
  await createProducer<WelcomePayload>(QUEUES.WELCOME_EMAIL, payload);
};

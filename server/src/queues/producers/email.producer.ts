import { QUEUES, EmailVerificationPayload } from "../../constant/queue.constant";
import { createProducer } from "./base.producer";
 

export const produceVerificationEmail = async (
  payload: EmailVerificationPayload
): Promise<void> => {
  await createProducer<EmailVerificationPayload>(
    QUEUES.EMAIL_VERIFICATION,
    payload
  );
};
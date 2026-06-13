import {
  QUEUES,
  EmailVerificationPayload,
} from "../../constant/queue.constant";
import { sendVerificationEmail } from "../../services/nodemailer.services";
import { createConsumer } from "./base.consumer";
 

export const startEmailConsumer = async (): Promise<void> => {
  await createConsumer<EmailVerificationPayload>(
    QUEUES.EMAIL_VERIFICATION,
    async (payload) => {
      await sendVerificationEmail(payload);
      console.log(` Verification email sent: ${payload.email}`);
    },
  );
};

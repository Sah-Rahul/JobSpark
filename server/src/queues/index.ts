import { startPasswordResetConsumer, startVerificationEmailConsumer, startWelcomeEmailConsumer } from "./consumers/email.consumer";

export const startAllConsumers = async (): Promise<void> => {
  await startVerificationEmailConsumer();
  await startPasswordResetConsumer()
  await startWelcomeEmailConsumer()
  console.log("✅ All consumers started");
};
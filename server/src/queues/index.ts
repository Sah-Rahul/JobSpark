import { startEmailConsumer, startPasswordResetConsumer, startWelcomeEmailConsumer } from "./consumers/email.consumer";

export const startAllConsumers = async (): Promise<void> => {
  await startEmailConsumer();
  await startPasswordResetConsumer()
  await startWelcomeEmailConsumer()
  console.log("✅ All consumers started");
};
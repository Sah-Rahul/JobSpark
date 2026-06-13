import { startEmailConsumer } from "./consumers/email.consumer";
// future mein aur aayenge:
// import { startNotificationConsumer } from "./notification.consumer";
// import { startJobAlertConsumer } from "./jobAlert.consumer";

export const startAllConsumers = async (): Promise<void> => {
  await startEmailConsumer(); 
  console.log("✅ All consumers started");
};
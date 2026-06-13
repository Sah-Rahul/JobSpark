import { getChannel } from "../../config/rabbitmq.config";

export const createProducer = async <T>(
  queueName: string,
  payload: T
): Promise<void> => {
  const channel = getChannel();

  await channel.assertQueue(queueName, { durable: true });

  channel.sendToQueue(
    queueName,
    Buffer.from(JSON.stringify(payload)),
    { persistent: true }
  ); 
};
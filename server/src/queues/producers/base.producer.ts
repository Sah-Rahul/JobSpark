import { getChannel } from "../../config/rabbitmq.config";

export const createProducer = async <T>(
  queueName: string,
  payload: T,
): Promise<void> => {
  const channel = getChannel();

  await channel.assertQueue(queueName, {
    durable: true,
    arguments: {
      "x-dead-letter-exchange": "",
      "x-dead-letter-routing-key": `${queueName}_dlq`,
    },
  });

  channel.sendToQueue(
    queueName,
    Buffer.from(JSON.stringify(payload)),
    { persistent: true }
  );

  console.log(`📨 Queued [${queueName}]:`, payload);
};
import { getChannel } from "../../config/rabbitmq.config";

export const createConsumer = async <T>(
  queueName: string,
  handler: (payload: T) => Promise<void>,
): Promise<void> => {
  const channel = getChannel();

  const dlqName = `${queueName}_dlq`;
  await channel.assertQueue(dlqName, {
    durable: true,
  });

  await channel.assertQueue(queueName, {
    durable: true,
    arguments: {
      "x-dead-letter-exchange": "",
      "x-dead-letter-routing-key": dlqName,
    },
  });

  channel.prefetch(1);
  console.log(`👷 Consumer ready: ${queueName}`);
  console.log(`💀 DLQ ready: ${dlqName}`);

  channel.consume(queueName, async (msg) => {
    if (!msg) return;

    try {
      const payload: T = JSON.parse(msg.content.toString());
      await handler(payload);
      channel.ack(msg);
    } catch (err) {
      console.error(`❌ Consumer error [${queueName}]:`, err);
      channel.nack(msg, false, false);
    }
  });
};

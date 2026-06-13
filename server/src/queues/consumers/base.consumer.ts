import amqplib from "amqplib";

export const createConsumer = async <T>(
  queueName: string,
  handler: (payload: T) => Promise<void>,
): Promise<void> => {
  const connection = await amqplib.connect(process.env.RABBITMQ_URL!);
  const channel = await connection.createChannel();

  await channel.assertQueue(queueName, { durable: true });
  channel.prefetch(1);

  console.log(` Consumer ready: ${queueName}`);

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

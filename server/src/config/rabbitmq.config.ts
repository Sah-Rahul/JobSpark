import amqplib, { Connection, Channel } from "amqplib";

let connection: Connection;
let channel: Channel;

export const connectRabbitMQ = async (): Promise<void> => {
  const connection = await amqplib.connect(process.env.RABBITMQ_URL!);
  channel = await connection.createChannel();
  console.log("✅ RabbitMQ connected");
};

export const getChannel = (): Channel => {
  if (!channel) throw new Error("RabbitMQ channel not initialized");
  return channel;
};
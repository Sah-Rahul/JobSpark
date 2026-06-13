import app from "./app";
import dotenv from "dotenv";
import { connectDB } from "./config/db.config";
import { connectRabbitMQ } from "./config/rabbitmq.config";
import { startAllConsumers } from "./queues";
import { connectRedis } from "./config/redis.config";

dotenv.config();

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await connectDB();
    await connectRedis()
    await connectRabbitMQ();
    await startAllConsumers();

    app.listen(PORT, () => {
      console.log(` Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(" Startup failed:", err);
    process.exit(1);
  }
};

startServer();

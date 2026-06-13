import Redis from "ioredis";

let redisClient: Redis;

export const connectRedis = async (): Promise<void> => {
  try {
    redisClient = new Redis(process.env.REDIS_URL!);

    redisClient.on("connect", () => console.log("✅ Redis connected"));
    redisClient.on("error", (err) => console.error("❌ Redis error:", err));
  } catch (error) {
    console.error("❌ Redis connect failed:", error);
    process.exit(1);
  }
};

export const getRedis = (): Redis => {
  if (!redisClient) throw new Error("Redis not initialized");
  return redisClient;
};
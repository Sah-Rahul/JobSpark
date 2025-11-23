import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import { connectDB } from "./config/db";
import errorMiddleware from "./middleware/Error.middleware";
import cookieParser from "cookie-parser";



import userRouter from "./routes/user.routes";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hello from server");
});

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1/user', userRouter)


app.use(errorMiddleware)
app.listen(PORT, () => {
  connectDB()
  console.log(`Server running on http://localhost:${PORT}`);
});

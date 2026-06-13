import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import { helmetConfig } from "./config/helmet.config";
import { corsConfig } from "./config/cors.config";
import { errorMiddleware } from "./middleware/error.middleware";
import appRoutes from "./routes";

const app = express();

app.use(helmet(helmetConfig));

app.use(cors(corsConfig));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ ok: true });
});

app.use(appRoutes)

app.use(errorMiddleware)

export default app;

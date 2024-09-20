import express from "express";
import cors from "cors";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import eventsRouter from "./routes/events.js";

const app = express();

app.use(eventsRouter);

app.use(cors());

app.use("*", notFoundHandler);

app.use(errorHandler);

export default app;

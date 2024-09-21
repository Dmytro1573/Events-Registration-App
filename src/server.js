import express from "express";
import cors from "cors";
import eventsRouter from "../src/routes/events.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";
import "dotenv/config";

const whitelist = [
  "https://water-tracker-101-team-5.vercel.app",
  "http://localhost:5173",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

const openCorsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const PORT = Number(process.env.PORT || "3000");
export function setupServer() {
  const app = express();

  app.use(cors(corsOptions));

  app.use(eventsRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

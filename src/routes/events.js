import express from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { eventSchema } from "../validation/events.js";
import { validateBody } from "../utils/validateBody.js";
import { createEventController } from "../controllers/event.js";

const router = express.Router();
const jsonParser = express.json();

router.post(
  "/events",
  jsonParser,
  validateBody(eventSchema),
  ctrlWrapper(createEventController)
);

export default router;

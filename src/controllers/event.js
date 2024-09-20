import { createEvent } from "../services/event.js";
import { eventSchema } from "../validation/events.js";
import createHttpError from "http-errors";

export async function createEventController(req, res, next) {
  const event = {
    name: req.body.name,
    email: req.body.email,
    date: req.body.date,
    hearAbout: req.body.hearAbout,
  };

  const { error, value } = eventSchema.validate(event);

  if (error !== undefined) {
    return next(createHttpError(400, error.details[0].message));
  }

  const createdEvent = await createEvent(value);

  res.status(201).send({
    status: 201,
    message: "Successfully created a event!",
    data: createdEvent,
  });
}

import { createEvent, getAllEvents } from "../services/event.js";
import { eventSchema } from "../validation/events.js";
import createHttpError from "http-errors";
import { parsePaginationParams } from "../utils/parsePaginationParams.js";
import { parseSortParams } from "../utils/parseSortParams.js";
import { parseFilterParams } from "../utils/parseFilterParams.js";

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

export async function getAllEventsController(req, res, next) {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = { ...parseFilterParams(req.query), _id: Object._id };

  const events = await getAllEvents({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });

  res.status(200).json({
    status: 200,
    message: "Events found",
    data: events,
  });
}

import { eventsCollection } from "../models/event.js";

export function createEvent(event) {
  return eventsCollection.create(event);
}

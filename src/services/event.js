import { eventsCollection } from "../models/event.js";

export function createEvent(event) {
  return eventsCollection.create(event);
}

export const getAllEvents = async ({
  page,
  perPage,
  sortBy,
  sortOrder,
  filter,
}) => {
  const limit = perPage;
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const [data, count] = await Promise.all([
    eventsCollection
      .find()
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(limit)
      .exec(),
    eventsCollection.countDocuments(),
  ]);

  const totalPages = Math.ceil(count / perPage);

  return {
    data,
    page,
    perPage,
    totalItems: count,
    totalPages,
    hasNextPage: Boolean(totalPages - page) && page <= totalPages,
    hasPreviousPage: page > 1 && page <= totalPages,
  };
};

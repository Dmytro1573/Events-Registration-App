function parseIsFavourite(maybeIsFavourite) {
  if (typeof maybeIsFavourite === "string") {
    return maybeIsFavourite.toLowerCase() === "true";
  }

  return undefined;
}

function parseContactType(maybeContactType) {
  if (typeof maybeContactType !== "string") {
    return undefined;
  }

  return maybeContactType;
}

export function parseFilterParams(query) {
  const { date, hearAbout } = query;

  const parsedIsFavourite = parseIsFavourite(date);
  const parsedContactType = parseContactType(hearAbout);

  const filter = {};

  if (typeof parsedIsFavourite !== "undefined") {
    filter.date = parsedIsFavourite;
  }

  if (parsedContactType) {
    filter.hearAbout = parsedContactType;
  }

  return filter;
}

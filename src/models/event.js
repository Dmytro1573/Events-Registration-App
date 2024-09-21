import { model, Schema } from "mongoose";

const eventsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    hearAbout: {
      type: String,
      enum: ["Social media", "Friends", "Found myself"],
      required: true,
      default: "Found myself",
    },
  },
  { timestamps: true, versionKey: false }
);

export const eventsCollection = model("events", eventsSchema);

import Joi from "joi";

export const eventSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    "string.base": "Name should be a string",
    "string.min": "Name should be at least {#limit}",
    "string.max": "Name should beat at most {#limit}",
  }),

  email: Joi.string().min(3).max(20).email().required(),
  date: Joi.string().min(3).max(20).required(),
  hearAbout: Joi.string().valid("Social media", "Friends", "Found myself"),
});

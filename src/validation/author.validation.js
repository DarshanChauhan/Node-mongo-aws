const Joi = require("joi");

const authorValidate = {
  createAuthor: {
    body: Joi.object({
      name: Joi.string().required(),
      authorCity: Joi.string().required(),
      books: Joi.array().optional(),
    }),
  },
};

module.exports = authorValidate;

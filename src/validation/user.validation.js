const Joi = require("joi");

const userValidate = {
  registerUser: {
    body: Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      birthdate: Joi.string().required(),
      email: Joi.string()
        .email({ tlds: true })
        .messages({ "string.email": "Please enter a valid email address" }),
    }),
  },
  updateUser: {
    body: Joi.object({
      firstName: Joi.string().optional(),
      lastName: Joi.string().optional(),
      birthdate: Joi.string().optional(),
    }),
  },
};

module.exports = userValidate;

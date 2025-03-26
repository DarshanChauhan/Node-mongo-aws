const Joi = require("joi");

const validateParams = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.string()
      .required()
      .messages({ "string.id": "Please enter a userId in params" }),
  });
  const { error } = schema.validate(req.params);
  if (error) {
    return res.status(400).json({ errorMessage: error.details[0].message });
  }
  next();
};
module.exports = { validateParams };

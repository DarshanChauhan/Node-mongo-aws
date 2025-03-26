const { ValidationError } = require("express-validation");

const globalError = async (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json({
      statusCode: err.statusCode,
      errorMessage: err.error,
      message: err?.details?.body[0]?.message,
    });
  }
};
module.exports = globalError;

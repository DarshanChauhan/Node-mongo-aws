const routes = require("express").Router();
const { validate } = require("express-validation");
const {
  updateUser,
  removeUser,
  getAllUsers,
} = require("../controller/user.controller");
const userValidate = require("../validation/user.validation");
const { validateParams } = require("../validation/validate.middleware");

routes.route("/").get(getAllUsers);


routes
  .route("/:id")
  .patch(validateParams, validate(userValidate.updateUser), updateUser);
routes.route("/:id").delete(validateParams, removeUser);
module.exports = routes;

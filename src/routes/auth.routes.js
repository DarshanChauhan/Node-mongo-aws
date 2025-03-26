const authRoutes = require("express").Router();
const { validate } = require("express-validation");
const { loginUser, registerUser } = require("../controller/auth.controller");
const userValidate = require("../validation/user.validation");

authRoutes.route("/login").post(loginUser);
authRoutes
  .route("/register")
  .post(validate(userValidate.registerUser), registerUser);

module.exports = authRoutes;

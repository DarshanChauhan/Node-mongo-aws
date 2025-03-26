const Session = require("../models/sessions.model");
const jwt = require("jsonwebtoken");
const { createUser } = require("../services/user.services");
const message = require("../constants/constants");
const userService = require("../services/user.services");

const loginUser = async (req, res) => {
  try {
    const existingUser = await userService.findOne({ email: req.body.email });
    if (!existingUser) {
      throw new Error(message.USER_NOT_FOUND);
    }
    const signToken = jwt.sign(
      { id: existingUser._id },
      process.env.SECRET_KEY,
      { expiresIn: 10000 }
    );
    if (signToken) {
      await Session.deleteMany({ userId: existingUser._id });
      await Session.create({
        userId: existingUser._id,
        token: signToken,
      });

      const data = {
        ...existingUser,
        jwtToken: signToken,
      };
      return res.status(200).json(data);
    }
  } catch (error) {
    return res.status(400).json({ errorMessage: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const insertUser = await createUser(req.body);
    return res.status(200).send(insertUser);
  } catch (error) {
    return res.status(400).json({ errorMessage: error.message });
  }
};

module.exports = { loginUser, registerUser };

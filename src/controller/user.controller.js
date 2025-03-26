const message = require("../constants/constants");
const userService = require("../services/user.services");

const updateUser = async (req, res) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    return res.status(200).send(updatedUser);
  } catch (error) {
    return res.status(404).json({ errorMessage: error.message });
  }
};

const findOne = async (req, res) => {
  try {
    const updatedUser = await userService.findOne(req.params.id);
    return res.status(200).send(updatedUser);
  } catch (error) {
    return res.status(404).json({ errorMessage: error.message });
  }
};

const removeUser = async (req, res) => {
  try {
    const isDeleted = await userService.removeUser(req.params.id);
    if (isDeleted) {
      return res.status(200).json({ message: message.USER_DELETE });
    }
  } catch (error) {
    return res.status(404).json({ errorMessage: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ errorMessage: error.message });
  }
};

module.exports = {
  updateUser,
  removeUser,
  getAllUsers,
  findOne,
};

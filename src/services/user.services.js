const User = require("../models/user.model");

const createUser = async (userData) => {
  const existingEmail = await User.findOne({ email: userData.email });
  if (existingEmail) {
    throw new Error("Email already exists 👽🔴");
  }
  return await User.create(userData);
};

const updateUser = async (id, updateData) => {
  let existingUser = await User.findOne({ _id: id });
  if (!existingUser) {
    throw new Error("User Not exists");
  }
  return await User.findByIdAndUpdate(existingUser.id, updateData, {
    new: true,
  });
};

const findOne = async (filter) => {
  let existingUser = await User.findOne({ ...filter }).lean();
  if (!existingUser) {
    throw new Error("User Not exists");
  }
  return existingUser;
};

const removeUser = async (id) => {
  let existingUser = await User.findOne({ _id: id });
  if (!existingUser) {
    throw new Error("User Not exists");
  }
  const updateUser = await User.deleteOne({ _id: existingUser._id });
  return updateUser.deletedCount > 0;
};

const getAllUsers = async () => {
  return await User.find({ isDeleted: { $ne: true } });
};

module.exports = { createUser, updateUser, removeUser, getAllUsers, findOne };

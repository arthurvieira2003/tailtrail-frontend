const User = require("../models/User");

const createUser = async (userData) => {
  return await User.create(userData);
};

const getUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

const getUserById = async (id) => {
  return await User.findByPk(id);
};

const updateUser = async (id, userData) => {
  return await User.update(userData, { where: { id } });
};

const deleteUser = async (id) => {
  return await User.destroy({ where: { id } });
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
  updateUser,
  deleteUser,
};

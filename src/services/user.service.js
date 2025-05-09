import userModel from '../models/user.model.js';

const getUsers = async () => {
  const data = await userModel.getUsers();
  return data;
};

const createUser = async (newUser) => {
  const data = await userModel.createUser(newUser);
  return data;
};

const updateUser = async (id, updatedUser) => {
  const data = await userModel.updateUser(id, updatedUser);
  return data;
};

export default {
  getUsers,
  createUser,
  updateUser
};

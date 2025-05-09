import userService from '../services/user.service.js';

const getUsers = async (req, res) => {
  const data = await userService.getUsers();
  res.json(data);
};

const createUser = async (req, res) => {
  const newUser = req.body;
  if (newUser.nombre && newUser.nota) {
    const data = await userService.createUser(newUser);
    res.status(201).json(data);
  } else {
    res.status(400).json({ message: "Faltan datos" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  const data = await userService.updateUser(id, updatedUser);
  res.json(data);
};

export default {
  getUsers,
  createUser,
  updateUser
};

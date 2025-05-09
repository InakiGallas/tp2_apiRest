const users = [
  { id: 1, nombre: "Juan Perez", email: "juanperez@gmail.com", nota: 9 },
  { id: 2, nombre: "Maria Lopez", email: "marialopez@gmail.com", nota: 7 },
  { id: 3, nombre: "Pedro Gonzalez", email: "PedroGonzalez@gmail.com", nota: 8 },
  { id: 4, nombre: "Ana Torres", email: "anat@gmail.com", nota: 6 }
];

const getUsers = async () => {
  return users;
};

const createUser = async (newUser) => {
  users.push(newUser);
  return newUser;
};

const updateUser = async (id, updatedData) => {
  const index = users.findIndex(u => u.id === parseInt(id));
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedData };
    return users[index];
  } else {
    return { error: 'Usuario no encontrado' };
  }
};

export default {
  getUsers,
  createUser,
  updateUser
};

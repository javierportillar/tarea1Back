const { UsersData, message } = require("../data/user");
const ChekBodyJson = require("../data/chekBodyInput");
const usersData = new UsersData();
const msjData = new message();

const getAllUsers = (_, res,) => {
  const users = usersData.getUsers();
  return res.status(200).json(users);
};

const getOneUser = (req, res,) => {
  const id = req.params.id;
  const user = usersData.getUserById(id);
  if (!user) {
    return res.status(404).json(msjData.msj("No se encontró el usuario", 404));
  }
  return res.status(200).json(user);
};

const deleteUser = (req, res,) => {
  const id = req.params.id;
  const userDeleted = usersData.deleteUser(id);
  if (userDeleted !== null) {
    return res.status(204).end();
  }
  return res
    .status(404)
    .json(msjData.msj("No se encontró el usuario a eliminar", 404));
};

const createNewUser = (req, res,) => {
  const errors = ChekBodyJson.validateCreateUser(req.body);
  if (errors.length > 0) {
    return res.status(400).json(msjData.msj(errors));
  }
  const newUser = usersData.createUser(req.body);
  return res.json(newUser);
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const errors = ChekBodyJson.validateUser(id, req.body);
  if (errors.length > 0) {
    return res.status(400).json(msjData.msj(errors));
  }
  const userUpdated = usersData.updateUser(id, req.body);
  if (!userUpdated) {
    return res.status(404).json(msjData.msj("Usuario No encontrado", "400"));
  }
  return res.json(userUpdated);
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  deleteUser,
  updateUser,
};

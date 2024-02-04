const { UsersData, message } = require("../data/user");
const ChekBodyJson = require("../data/chekBodyInput");
const usersData = new UsersData();
const msjData = new message();

const getAllUsers = (req, res, next) => {
  const users = usersData.getUsers();
  return res.status(200).json(users);
};

const getOneUser = (req, res, next) => {
  const id = req.params.id;
  const user = usersData.getUserById(Number(id));
  if (!user) {
    return res.status(404).send(msjData.msj("No se encontró el usuario", 404));
  }
  return res.status(200).json(user);
};

const deleteUser = (req, res, next) => {
  const userDeleted = usersData.deleteUser(Number(req.params.id));
  if (!userDeleted) {
    return res
      .status(404)
      .send(msjData.msj("No se encontró el usuario a eliminar", 404));
  }
  return res.status(204);
};

const createNewUser = (req, res, next) => {
  const errors = ChekBodyJson.validateCreateUser(req.body);
  if (errors.length > 0) {
    return res.status(400).json(errors);
  }
  const newUser = usersData.createUser(req.body);
  return res.json(newUser);
};

const updateUser = (req, res, next) => {
  const idJSON = req.params;
  const errors = ChekBodyJson.validateUser(idJSON, req.body);
  if (errors.length > 0) {
    return res.status(400).json(errors);
  }
  const userUpdated = usersData.updateUser(req.params.id, req.body);
  if (!userUpdated) {
    return res.status(404).send(msjData.msj("Usuario No encontrado", "400"));
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

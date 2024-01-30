const UsersData = require("../data/user");
const {v4} = require('uuid')

const getAllUsers = (req, res, next) => {
  const usersData = new UsersData();
  const users = usersData.getUsers();
  res.json(users);
};

const getOneUser = (req, res, next) => {
  console.log('Get One');
  const id = req.params.id;
  const usersData = new UsersData();
  const user = usersData.getUserById(Number(id));
  res.json(user);
};

const createNewUser = (req, res, next) => {
  const usersData = new UsersData();
  const newUser = usersData.createUser(v4(), req.body);
  console.log(usersData.datos);
  res.json(newUser);
};

const deleteUser = (req, res, next) => {
  const usersData = new UsersData();
  const userDeleted = usersData.deleteUser(Number(req.params.id));
  console.log(usersData.datos);
  res.json(userDeleted);
};

const updateUser = (req, res, next) => {
  const usersData = new UsersData();
  const userUpdated = usersData.updateUser(Number(req.params.id), req.body);
  console.log(userUpdated);
  res.json(userUpdated);
};
module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  deleteUser,
  updateUser,
};

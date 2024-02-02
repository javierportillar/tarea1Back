const { UsersData, message } = require("../data/user");
const { v4 } = require("uuid");
const usersData = new UsersData();
const msjData = new message();

class ChekBodyJson {
  static validateUser(data) {
    //Validate that req.Body Only have id,name and age as keys
    const errors = [];
    const validInputs = ["id", "name", "age"];
    const dataKeys = Object.keys(data);
    dataKeys.forEach((key) => {
      if (!validInputs.includes(key)) {
        errors.push(`Propiedad inválida: ${key}`);
      }
    });
    // Validate that ID and NAME are an String
    if (typeof data.id !== "string") {
      console.log(typeof data.id);
      errors.push("id must be string");
    }
    if (typeof data.name !== "string") {
      errors.push("name must be string");
    }
    // Validate that AGE is an number
    if (typeof data.age !== "number" || !Number.isInteger(data.age)) {
      errors.push("age must be numero");
    }
    return errors;
  }
}

const getAllUsers = (req, res, next) => {
  const users = usersData.getUsers();
  if (users.length == 0) {
    return res.status(200).send(msjData.msj("No se encontraron usuarios", 200));
  }
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
  const errors = ChekBodyJson.validateUser(req.body);
  if (errors.length > 0) {
    res.status(400).json(errors); //Se eliminó return para que al momento de no poner id, salga el error pero creé el obj con id v4()
  }
  const newUser = usersData.createUser(v4(), req.body);
  return res.json(newUser);
};

const updateUser = (req, res, next) => {
  const errors = ChekBodyJson.validateUser(req.body);
  if (errors.length > 0) {
    return res.status(400).json(errors);
  }
  const userUpdated = usersData.updateUser(Number(req.params.id), req.body);
  if (!userUpdated) {
    return res.status(400).send(msjData.msj('Usuario No encontrado','400'));
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

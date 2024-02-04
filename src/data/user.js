const { v4 } = require("uuid");

class UsersData {
  datos = [
    {
      id: "1",
      name: "Carlos",
      age: 22,
    },
    {
      id: v4(),
      name: "Arturo",
      age: 65,
    },
    {
      id: v4(),
      name: "Nicolás",
      age: 24,
    },
  ];

  createUser(dataToCreate) {
    const newUser = {
      id: v4(),
      ...dataToCreate,
    };
    this.datos.push(newUser);
    return newUser;
  }
  deleteUser(id) {
    const userToDelete = this.datos.find((user) => user.id === id);
    if (userToDelete == undefined) {
      return null;
    }
    this.datos = this.datos.filter((user) => user.id !== id);
    return userToDelete;
  }
  updateUser(id, dataToUpdate) {
    const userIndex = this.datos.findIndex((user) => user.id === id);
    if (userIndex == -1) {
      return null;
    }
    this.datos[userIndex] = { ...this.datos[userIndex], ...dataToUpdate };
    return this.datos[userIndex];
  }
  getUsers() {
    return this.datos;
  }
  getUserById(id) {
    const user = this.datos.find((user) => user.id === id);
    if (user == undefined) return null;
    return user;
  }
}

class message {
  msj(mssg, code) {
    const message = `
    {
      message: ${mssg},
      code: ${code},
      errors: []
    }`;
    return message;
  }
}

module.exports = { UsersData, message };

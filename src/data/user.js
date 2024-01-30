const { v4 } = require("uuid");

class UsersData {
  datos = [
    {
      id: v4(),
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

  createUser(id, dataToCreate) {
    const newUser = {
      id: v4(),
      ...dataToCreate,
    };
    this.datos.push(newUser);
    return newUser;
  }
  deleteUser(id) {
    const userToDelete = this.datos.find((user) => user.id === id); // { id: 3, name: 'Nicolás', age: 24 }
    this.datos = this.datos.filter((user) => user.id !== id); // [1,2,3,4,5] => [1,2,4,5]
    return userToDelete;
  }
  updateUser(id, dataToUpdate) {
    const userIndex = this.datos.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.datos[userIndex] = { ...this.datos[userIndex], ...dataToUpdate };
    }
  }
  getUsers() {
    return this.datos;
  }
  getUserById(id) {
    const user = this.datos.find((user)=>user.id === id);
    return user;
  }
}

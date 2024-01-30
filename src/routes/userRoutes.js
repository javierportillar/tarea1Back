const router = require('express').Router();
const { v4 } = require("uuid");
const UsersData = require('../data/user');
const { json } = require('express');

router.get('/', (req, res) => {
  const usersData = new UsersData();
  console.log(UsersData);
  const users = usersData.getUsers();
  res.json(users);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const usersData = new UsersData();
  const user = usersData.getUserById(Number(id));
  res.json(user);
});

router.post('/',(req,res)=>{
  const usersData = new UsersData;
  const newUser =  usersData.createUser(v4(),req.body);
  console.log(usersData.datos);
  res.json(newUser);
});

router.delete('/:id',(req,res)=>{
  const usersData = new UsersData;
  const userDeleted = usersData.deleteUser(Number(req.params.id));
  console.log(usersData.datos);
  res.json(userDeleted);
})

router.put('/:id',(req,res)=>{
  const usersData = new UsersData;
  const userUpdated = usersData.updateUser(Number(req.params.id), req.body);
  console.log(userUpdated);
  res.json(userUpdated);
})

module.exports = router;
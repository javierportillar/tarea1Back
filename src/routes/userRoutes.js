const router = require("express").Router();
const {
  getAllUsers,
  getOneUser,
  createNewUser,
  deleteUser,
  updateUser
} = require("../controllers/usersController");

router.get("/", getAllUsers,);

router.get("/:id", getOneUser,);

router.post("/", createNewUser,);

router.delete("/:id", deleteUser,);

router.put("/:id",updateUser,);

module.exports = router;

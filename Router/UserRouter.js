const express = require("express");
const router = express.Router();

const {
  getUserByEmail,
  deleteUser,
  updateUser,
  addUser,
  getUserById,
  getAllUsers,
  getAdminByEmail,
  getUserRole,
  makeAdmin
} = require("../Controlar/UserControlar/UserControlar");

router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.post("/user", addUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/user/:email", getUserByEmail);
router.get("/user/admin/:email", getAdminByEmail);
router.get("/user/user/:email", getUserRole);
router.patch("/user/admin/:id", makeAdmin);

module.exports = router;

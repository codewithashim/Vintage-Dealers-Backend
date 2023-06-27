const UserModel = require("../../Models/UserModels/UserModels");

/**
 * Get all users
 */

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({
      message: "Successfully Get All Users",
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      success: false,
    });
  }
};

/**
 *  Get user by id
 */

const getUserById = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/**
 *  Add user
 */

const addUser = async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  try {
    await newUser.save();
    res.status(201).json({
      message: "Successfully Add User",
      success: true,
      data: newUser,
    });
  } catch (error) {
    res.status(409).json({
      message: error.message,
      success: false,
    });
  }
};

/**
 *  Update user
 */

const updateUser = async (req, res) => {
  const user = req.body;
  try {
    const updateUser = await UserModel.findByIdAndUpdate(req.params.id, user, {
      new: true,
    });
    res.status(200).json({ updateUser });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

/**
 *  Delete user
 */

const deleteUser = async (req, res) => {
  try {
    const deleteUser = await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ deleteUser });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

/**
 *  Get user by email
 */

const getUserByEmail = async (req, res) => {
  try {
    const user = await UserModel.find({ email: req.params.email });
    res.status(200).json({ user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// make isAdmin

const makeAdmin = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      { role: "admin" },
      {
        new: true,
      }
    );
    res.status(200).json({ user });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

/**
 *  Get Admin By Email
 */

const getAdminByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      res.send({
        status: 400,
        sucess: false,
        message: "No Data Found",
      });
    } else {
      const isAdmin = user?.role === "admin";

      res.json({
        status: 200,
        isAdmin: isAdmin,
        sucess: true,
        message: "Successfully Get Admin ",
      });
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getUserRole = async (req, res) => {
  const email = req.params.email;
  const user = await UserModel.findOne({ email: email });
  if (!user) {
    res.send({
      status: 400,
      sucess: false,
      message: "No Data Found",
    });
  } else {
    const isUser = user.role === "user";
    res.json({
      status: 200,
      isUser: isUser,
      sucess: true,
      message: "Successfully Get Admin ",
    });
  }
};

module.exports = {
  getUserByEmail,
  deleteUser,
  updateUser,
  addUser,
  getUserById,
  getAllUsers,
  makeAdmin,
  getAdminByEmail,
  getUserRole,
};

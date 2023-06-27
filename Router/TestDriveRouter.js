const express = require("express");
const router = express.Router();
const {
  getAllTestDrive,
  getTestDriveById,
  addTestDrive,
  updateTestDrive,
  deleteTestDrive,
} = require("../Controlar/TestDriveControlar/TestDriveControlar");


router.get("/test-drive", getAllTestDrive);
router.get("/test-drive/:id", getTestDriveById);
router.post("/test-drive", addTestDrive);
router.put("/test-drive/:id", updateTestDrive);
router.delete("/test-drive/:id", deleteTestDrive);

module.exports = router;
const express = require("express");
const router = express.Router();

const {
  getAllPhotoFormGelary,
  getPhotoById,
  addPhoto,
  updatePhoto,
  deletePhoto,
} = require("../Controlar/PhotoGelaryControlar/PhotoGelaryControlar");

router.get("/photo-gelary", getAllPhotoFormGelary);
router.get("/photo-gelary/:id", getPhotoById);
router.post("/photo-gelary", addPhoto);
router.put("/photo-gelary/:id", updatePhoto);
router.delete("/photo-gelary/:id", deletePhoto);


module.exports = router;

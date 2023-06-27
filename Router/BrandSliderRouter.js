const express = require("express");
const router = express.Router();
const {deleteBrandSlider,updateBrandSlider, addBrandSlider, getBrandSliderById, getAllBrandSlider} = require("../Controlar/BrandSliderControlar/BrandSliderControlar");

router.get("/brandSlider", getAllBrandSlider);
router.get("/brandSlider/:id", getBrandSliderById);
router.post("/brandSlider", addBrandSlider);
router.patch("/brandSlider/:id", updateBrandSlider);
router.delete("/brandSlider/:id", deleteBrandSlider);

module.exports = router;

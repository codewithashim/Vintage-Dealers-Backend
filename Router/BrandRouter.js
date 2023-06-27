const express = require("express");
const router = express.Router();
const {
  deleteBrand,
  updateBrand,
  addBrand,
  getBrandById,
  getAllBrand,
  getAllBrandWithPaginetion,
} = require("../Controlar/BrandControlar/BrandControlar");

router.get("/brand", getAllBrand);
router.get("/brand/brandsPagination", getAllBrandWithPaginetion);
router.get("/brand/:id", getBrandById);
router.post("/brand", addBrand);
router.patch("/brand/:id", updateBrand);
router.delete("/brand/:id", deleteBrand);

module.exports = router;

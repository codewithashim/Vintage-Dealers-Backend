const express = require("express");
const router = express.Router();
const {
  getAllCategory,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
  getAllCategoryWithPaginetion
} = require("../Controlar/CategoryControlar/CategoryControlar");

router.get("/category", getAllCategory);
router.get("/category/:id", getCategoryById);
router.post("/category", addCategory);
router.patch("/category/:id", updateCategory);
router.delete("/category/:id", deleteCategory);
router.get("/categoryPagination", getAllCategoryWithPaginetion)

module.exports = router;

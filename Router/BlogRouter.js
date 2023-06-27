const express = require("express");
const router = express.Router();

const {
  getAllBlog,
  getBlogById,
  addBlog,
  updateBlog,
  deleteBlog,
  getBlogByPagination,
} = require("../Controlar/BlogControlar/BlogControlar");

router.get("/allblog", getAllBlog);
router.get("/blog", getBlogByPagination);
router.get("/blog/:id", getBlogById);
router.post("/blog", addBlog);
router.patch("/blog/:id", updateBlog);
router.delete("/blog/:id", deleteBlog);

module.exports = router;
const express = require("express");
const router = express.Router();
const {deleteProduct,updateProduct,addProduct,getProductById ,getAllProduct,searchProduct,updateData, getProduct} = require("../Controlar/ProductControlar/ProductControlar"); 

router.get("/product", getAllProduct);
router.get("/allproduct", getProduct);
router.get("/product/:id", getProductById);
router.post("/product", addProduct);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);
router.put("/product/:id", updateData);
router.get("/productSearch", searchProduct);

module.exports = router;

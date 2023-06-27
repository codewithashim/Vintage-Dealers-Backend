const express = require("express");
const ProductModel = require("../../Models/ProductModels/ProductModels");
const ObjectId = require("mongodb").ObjectID;

/**
 * Get All Product
 */

const getProduct = async (req, res) => {
  try {
    const product = await ProductModel.find();
    res.send({
      status: 200,
      sucess: true,
      message: "Get All Product",
      data: product,
    });
  } catch (err) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
}


const getAllProduct = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const skip = (page - 1) * pageSize;
    const totalProducts = await ProductModel.countDocuments();
    const totalPages = Math.ceil(totalProducts / pageSize);
    const products = await ProductModel.find().skip(skip).limit(pageSize);
    res.send({
      status: 200,
      success: true,
      message: "Get All Product",
      data: products,
      page,
      pageSize,
      totalPages,
      totalProducts,
    });
  } catch (err) {
    res.send({
      status: 404,
      success: false,
      message: err.message,
    });
  }
};

/**
 * Get Product By Id
 */

const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const getdata = await ProductModel.find({ _id: id });
    res.send({
      status: 200,
      sucess: true,
      message: "Get Product By Id",
      data: getdata,
    });
  } catch (err) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
};

/**
 * Add Product
 */

const addProduct = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = new ProductModel(product);
    await newProduct.save();

    res.send({
      status: 200,
      sucess: true,
      message: "Product Added Successfully",
      data: newProduct,
    });
  } catch (err) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
};

/**
 * Update Product
 */

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updateProduct = await ProductModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.send({
      status: 200,
      sucess: true,
      message: "Product Updated Successfully",
      data: updateProduct,
    });
  } catch (err) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
};

const updateData = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: ObjectId(id) };
  const product = req.body;

  const opction = {
    upsert: true,
  };

  const updateProductData = {
    $set: {
      product: product,
    },
  };

  const updateProduct = await ProductModel.findOneAndUpdate(
    filter,
    product,
    opction,
    updateProductData
  );

  res.send({
    status: 200,
    sucess: true,
    message: "Product Updated Successfully",
    data: updateProduct,
  });
};

/**
 * Delete Product
 */

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteProduct = await ProductModel.findByIdAndDelete({ _id: id });
    res.send({
      status: 200,
      sucess: true,
      message: "Product Deleted Successfully",
      data: deleteProduct,
    });
  } catch (err) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
};

// search product by name category and brand name

const searchProduct = async (req, res) => {
  try {
    const search = req.query.search;
    const regex = new RegExp(search, 'i');
    const searchProduct = await ProductModel.find({
      $or: [
        { productName: regex },
        { productCategory: regex },
        { productBrand: regex },
      ],
    });
    res.send({
      status: 200,
      success: true,
      message: 'Products retrieved successfully',
      data: searchProduct,
    });
  } catch (error) {
    res.send({
      status: 404,
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  deleteProduct,
  updateProduct,
  addProduct,
  getProductById,
  getAllProduct,
  updateData,
  searchProduct,
  getProduct 
};

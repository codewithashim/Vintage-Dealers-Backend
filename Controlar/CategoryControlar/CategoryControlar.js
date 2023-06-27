const CategoryModel = require("../../Models/CategoryModels/CategoryModels");

/**
 * Get All Category
 */

const getAllCategory = async (req, res) => {
  try {
    const allCategory = await CategoryModel.find();
    res.send({
      status: 200,
      sucess: true,
      message: "Get All Category",
      data: allCategory,
    });
  } catch (err) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
};

const getAllCategoryWithPaginetion = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const skip = (page - 1) * pageSize;
    const totalCategory = await CategoryModel.countDocuments();
    const totalPages = Math.ceil(totalCategory / pageSize);
    const allCategory = await CategoryModel.find().skip(skip).limit(pageSize).sort({ createdAt: 1 });

    res.send({
      status: 200,
      success: true,
      message: "Get All Category",
      data: allCategory,
      page,
      pageSize,
      totalPages,
      totalCategory,
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
 * Get Category By Id
 */

const getCategoryById = async (req, res) => {
  const id = req.params.id;
  try {
    const getdata = await CategoryModel.find({ _id: id });
    res.send({
      status: 200,
      sucess: true,
      message: "Get Category By Id",
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
 *  Add Category
 */

const addCategory = async (req, res) => {
  try {
    const category = req.body;
    const newCategory = new CategoryModel(category);
    await newCategory.save();

    res.send({
      status: 200,
      sucess: true,
      message: "Add Category",
      data: newCategory,
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
 *  Update Category
 */

const updateCategory = async (req, res) => {
  const id = req.params.id;
  const category = req.body;
  try {
    const updateCategory = await CategoryModel.findByIdAndUpdate(
      { _id: id },
      category,
      {
        new: true,
      }
    );
    res.send({
      status: 200,
      sucess: true,
      message: "Category Updated Successfully",
      data: updateCategory,
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
 *  Delete Category
 */

const deleteCategory = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteCategory = await CategoryModel.findByIdAndDelete({ _id: id });
    res.send({
      status: 200,
      sucess: true,
      message: "Category Deleted Successfully",
      data: deleteCategory,
    });
  } catch (err) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
};

// get category data by category name

const searchByCategory = async (req, res) => {
  const serchTerm = req.query.q;
  try {
    const data = await CategoryModel.find({ category: serchTerm });
    res.send({
      status: 200,
      sucess: true,
      message: "Search By Category",
      data: data,
    });
  } catch (err) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
};

module.exports = {
  getAllCategory,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
  searchByCategory,
  getAllCategoryWithPaginetion,
};

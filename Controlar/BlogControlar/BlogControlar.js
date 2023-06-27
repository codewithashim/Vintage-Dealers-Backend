const BlogModel = require("../../Models/BlogModels/BlogModels");

// get all blog

const getAllBlog = async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.send({
      status: 200,
      sucess: true,
      message: "Get All Blog",
      data: blogs,
    });
  } catch (err) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
};

// get blog by pagination

const getBlogByPagination = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const skip = (page - 1) * pageSize;
    const totalBlog = await BlogModel.countDocuments();
    const totalPages = Math.ceil(totalProducts / pageSize);
    const blog = await BlogModel.find().skip(skip).limit(pageSize);
    res.send({
      status: 200,
      success: true,
      message: "Get All Blogs",
      data: blog,
      page,
      pageSize,
      totalPages,
      totalBlog,
    });
  } catch (err) {
    res.send({
      status: 404,
      success: false,
      message: err.message,
    });
  }
};

// get blog by id

const getBlogById = async (req, res) => {
  const id = req.params.id;
  try {
    const getdata = await BlogModel.find({ _id: id });
    res.send({
      status: 200,
      sucess: true,
      message: "Get Blog By Id",
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

// add blog

const addBlog = async (req, res) => {
  try {
    const blog = req.body;
    const newBlog = new BlogModel(blog);
    await newBlog.save();

    res.send({
      status: 200,
      sucess: true,
      message: "Add Blog",
      data: newBlog,
    });
  } catch (err) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
};

// update blog

const updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = req.body;
    const updateBlog = await BlogModel.findByIdAndUpdate({ _id: id }, blog, {
      new: true,
    });
    res.send({
      status: 200,
      sucess: true,
      message: "Update Blog",
      data: updateBlog,
    });
  } catch (error) {
    res.send({
      status: 404,
      sucess: false,
      message: error,
    });
  }
};

// delete blog

const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    await BlogModel.findByIdAndDelete({ _id: id });
    res.send({
      status: 200,
      sucess: true,
      message: "Delete Blog",
    });
  } catch (error) {
    res.send({
      status: 404,
      sucess: false,
      message: error,
    });
  }
};

module.exports = {
  getAllBlog,
  getBlogById,
  addBlog,
  updateBlog,
  deleteBlog,
  getBlogByPagination 
};

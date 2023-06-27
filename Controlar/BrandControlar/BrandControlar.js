const BrandModal = require("../../Models/BrandModels/BrandModels");

// get all brand

const getAllBrand = async (req, res) => {
  try {
    const brands = await BrandModal.find();
    res.send({
      status: 200,
      sucess: true,
      message: "Get All Brand",
      data: brands,
    });
  } catch (err) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
};

// Get All Brand With Paginetion

const getAllBrandWithPaginetion = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const skip = (page - 1) * pageSize;
    const totalBrand = await BrandModal.countDocuments();
    const totalPages = Math.ceil(totalBrand / pageSize);
    const allBrand = await BrandModal.find().skip(skip).limit(pageSize).sort({ createdAt: 1 });

    res.send({
      status: 200,
      success: true,
      message: "Get All Brand",
      data: allBrand,
      page,
      pageSize,
      totalPages,
      totalBrand,
    });
  } catch (err) {
    res.send({
      status: 404,
      success: false,
      message: err.message,
    });
  }
};

// get brand by id

const getBrandById = async (req, res) => {
  const id = req.params.id;
  try {
    const getdata = await BrandModal.find({ _id: id });
    res.send({
      status: 200,
      sucess: true,
      message: "Get Brand By Id",
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

// add brand

const addBrand = async (req, res) => {
  try {
    const brand = req.body;
    const newBrand = new BrandModal(brand);
    await newBrand.save();

    res.send({
      status: 200,
      sucess: true,
      message: "Add Brand",
      data: newBrand,
    });
  } catch (err) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
};

// update brand

const updateBrand = async (req, res) => {
  const id = req.params.id;
  const brand = req.body;
  try {
    const updateBrand = await BrandModal.findByIdAndUpdate({ _id: id }, brand, {
      new: true,
    });
    res.send({
      status: 200,
      sucess: true,
      message: "Update Brand",
      data: updateBrand,
    });
  } catch (err) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
};

// delete brand

const deleteBrand = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteBrand = await BrandModal.findByIdAndDelete({ _id: id });
    res.send({
      status: 200,
      sucess: true,
      message: "Delete Brand",
      data: deleteBrand,
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
  deleteBrand,
  updateBrand,
  addBrand,
  getBrandById,
  getAllBrand,
  getAllBrandWithPaginetion
};

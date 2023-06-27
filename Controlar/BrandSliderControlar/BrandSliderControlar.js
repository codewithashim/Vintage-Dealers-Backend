const BrandSlider = require("../../Models/BrandSliderModel/BrandSliderModel");

// get all brand slider

const getAllBrandSlider = async (req, res) => {
  try {
    const allBrandSlider = await BrandSlider.find();
    res.send({
      status: 200,
      sucess: true,
      message: "Get All Brand Slider",
      data: allBrandSlider,
    });
  } catch (error) {
    res.send({
      status: 404,
      sucess: false,
      message: error,
    });
  }
};

// get brand slider by id

const getBrandSliderById = async (req, res) => {
  const id = req.params.id;
  try {
    const getdata = await BrandSlider.find({ _id: id });
    res.send({
      status: 200,
      sucess: true,
      message: "Get Brand Slider By Id",
      data: getdata,
    });
  } catch (error) {
    res.send({
      status: 404,
      sucess: false,
      message: error,
    });
  }
};

// add brand slider

const addBrandSlider = async (req, res) => {
  try {
    const brandSlider = req.body;
    const newBrandSlider = new BrandSlider(brandSlider);
    await newBrandSlider.save();

    res.send({
      status: 200,
      sucess: true,
      message: "Add Brand Slider",
      data: newBrandSlider,
    });
  } catch (error) {
    res.send({
      status: 404,
      sucess: false,
      message: error,
    });
  }
};

// update brand slider

const updateBrandSlider = async (req, res) => {
  const id = req.params.id;
  try {
    const updateBrandSlider = await BrandSlider.findByIdAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.send({
      status: 200,
      sucess: true,
      message: "Update Brand Slider",
      data: updateBrandSlider,
    });
  } catch (error) {
    res.send({
      status: 404,
      sucess: false,
      message: error,
    });
  }
};

// delete brand slider

const deleteBrandSlider = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteBrandSlider = await BrandSlider.findByIdAndDelete({ _id: id });
    res.send({
      status: 200,
      sucess: true,
      message: "Delete Brand Slider",
      data: deleteBrandSlider,
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
  deleteBrandSlider,
  updateBrandSlider,
  addBrandSlider,
  getBrandSliderById,
  getAllBrandSlider,
};

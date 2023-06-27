const PhotoGelaryModel = require("../../Models/PhotoGelaryModel/PhotoGelaryModel");

const getAllPhotoFormGelary = async (req, res) => {
  try {
    const allPhoto = await PhotoGelaryModel.find();
    res.send({
      status: 200,
      sucess: true,
      message: "Get All Photo",
      data: allPhoto,
    });
  } catch (err) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
};

const getPhotoById = async (req, res) => {
  const id = req.params.id;
  try {
    const getdata = await PhotoGelaryModel.find({ _id: id });
    res.send({
      status: 200,
      sucess: true,
      message: "Get Photo By Id",
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

const addPhoto = async (req, res) => {
  try {
    const photo = req.body;
    const newPhoto = new PhotoGelaryModel(photo);
    await newPhoto.save();

    res.send({
      status: 200,
      sucess: true,
      message: "Add Photo",
      data: newPhoto,
    });
  } catch (err) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
};

const updatePhoto = async (req, res) => {
  try {
    const id = req.params.id;
    const photo = req.body;
    const updatePhoto = await PhotoGelaryModel.findByIdAndUpdate(
      { _id: id },
      photo,
      { new: true }
    );
    res.send({
      status: 200,
      sucess: true,
      message: "Update Photo",
      data: updatePhoto,
    });
  } catch (error) {
    res.send({
      status: 404,
      sucess: false,
      message: error,
    });
  }
};

const deletePhoto = async (req, res) => {
  try {
    const id = req.params.id;
    await PhotoGelaryModel.findByIdAndDelete({ _id: id });
    res.send({
      status: 200,
      sucess: true,
      message: "Delete Photo",
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
  getAllPhotoFormGelary,
  getPhotoById,
  addPhoto,
  updatePhoto,
  deletePhoto,
};

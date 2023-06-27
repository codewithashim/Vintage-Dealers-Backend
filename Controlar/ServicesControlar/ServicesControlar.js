const express = require("express");
const Services = require("../../Models/ServicesModels/ServicesModels");

const getAllServices = async (req, res) => {
  try {
    const allServices = await Services.find();
    res.send({
      status: 200,
      sucess: true,
      message: "Get All Services",
      data: allServices,
    });
  } catch (err) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
};

const getServicesById = async (req, res) => {
  try {
    const id = req.params.id;
    const getdata = await Services.find({ _id: id });

    if (getdata) {
      res.send({
        status: 200,
        sucess: true,
        message: "Successfully Get The Data By Id",
        data: getdata,
      });
    } else {
      res.send({
        status: 400,
        sucess: false,
        message: "No Data Found",
      });
    }
  } catch (err) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
};

const addServices = async (req, res) => {
  try {
    const { services, details, image } = req.body;
    const newServices = new Services({
      services,
      details,
      image,
    });
    await newServices.save();
    res.send({
      status: 200,
      sucess: true,
      message: "Service Added Successfully",
      data: newServices,
    });
  } catch (error) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
};

const updateServices = async (req, res) => {
  try {
    const updatedService = await Services.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedService) {
      res.status(404).send({
        status: 404,
        success: false,
        message: "Service not found",
      });
    } else {
      res.send({
        status: 200,
        success: true,
        message: "Successfully updated",
        data: updatedService,
      });
    }
  } catch (error) {
    res.status(400).send({
      status: 400,
      success: false,
      message: error.message,
    });
  }
};

const deleteService = async (req, res) => {
  try {
    const deletedService = await Services.findByIdAndRemove(req.params.id);
    if (!deletedService) {
      res.status(404).send({
        status: 404,
        success: false,
        message: "Service not found",
      });
    } else {
      res.send({
        status: 200,
        success: true,
        message: "Deleted Service",
        data: deletedService,
      });
    }
  } catch (error) {
    res.status(400).send({
      status: 400,
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllServices,
  addServices,
  updateServices,
  getServicesById,
  deleteService,
};

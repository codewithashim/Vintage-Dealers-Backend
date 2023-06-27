const express = require("express");
const TestDrive = require("../../Models/TestDriveModels/TestDriveModels");

const getAllTestDrive = async (req, res) => {
  try {
    const allTestDrive = await TestDrive.find();
    res.send({
      status: 200,
      sucess: true,
      message: "Get All TestDrive",
      data: allTestDrive,
    });
  } catch (err) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
};

const getTestDriveById = async (req, res) => {
  try {
    const id = req.params.id;
    const getdata = await TestDrive.find({ _id: id });

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

const addTestDrive = async (req, res) => {
  try {
    const testDrive = req.body;
    const newTestDrive = await TestDrive.create(testDrive);
    res.send({
      status: 200,
      sucess: true,
      message: "TestDrive Added Successfully",
      data: newTestDrive,
    });
  } catch (error) {
    res.send({
      status: 404,
      sucess: false,
      message: err,
    });
  }
};

const updateTestDrive = async (req, res) => {
  try {
    const updatedService = await TestDrive.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedService) {
      res.status(404).send({
        status: 404,
        success: false,
        message: "TestDrive not found",
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

const deleteTestDrive = async (req, res) => {
  try {
    const deletedTestDrive = await TestDrive.findByIdAndRemove(req.params.id);
    if (!deletedTestDrive) {
      res.status(404).send({
        status: 404,
        success: false,
        message: "TestDrive not found",
      });
    } else {
      res.send({
        status: 200,
        success: true,
        message: "Deleted TestDrive",
        data: deletedTestDrive,
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
    getAllTestDrive,
    getTestDriveById,
    addTestDrive,
    updateTestDrive,
    deleteTestDrive
}
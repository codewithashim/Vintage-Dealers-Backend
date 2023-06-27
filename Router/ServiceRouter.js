const express = require("express");
const router = express.Router();
const {
  getAllServices,
  addServices,
  getServicesById,
  updateServices,
  deleteService,
} = require("../Controlar/ServicesControlar/ServicesControlar");

router.get("/service", getAllServices);
router.get("/service/:id", getServicesById);
router.post("/service", addServices);
router.patch("/service/:id", updateServices);
router.delete("/service/:id", deleteService);

module.exports = router;

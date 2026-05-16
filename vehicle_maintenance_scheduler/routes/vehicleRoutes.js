const express = require("express");

const router = express.Router();

const Log = require("../../logging_middleware/logger");

const {
    getAllVehicles,
    addVehicle,
    updateVehicle,
    deleteVehicle
} = require("../services/vehicleService");



// GET ALL VEHICLES

router.get("/vehicles", async (req, res) => {

    const vehicles = getAllVehicles();

    await Log(
        "backend",
        "info",
        "route",
        "Fetched all vehicles"
    );

    res.json({
        success: true,
        vehicles: vehicles
    });

});



// ADD VEHICLE

router.post("/vehicles", async (req, res) => {

    const newVehicle = req.body;

    addVehicle(newVehicle);

    await Log(
        "backend",
        "info",
        "controller",
        "New vehicle added"
    );

    res.json({
        success: true,
        message: "Vehicle added successfully",
        vehicle: newVehicle
    });

});



// UPDATE VEHICLE

router.put("/vehicles/:id", async (req, res) => {

    const id = parseInt(req.params.id);

    const updatedData = req.body;

    updateVehicle(id, updatedData);

    await Log(
        "backend",
        "warn",
        "service",
        `Vehicle ${id} updated`
    );

    res.json({
        success: true,
        message: "Vehicle updated successfully"
    });

});



// DELETE VEHICLE

router.delete("/vehicles/:id", async (req, res) => {

    const id = parseInt(req.params.id);

    deleteVehicle(id);

    await Log(
        "backend",
        "error",
        "handler",
        `Vehicle ${id} deleted`
    );

    res.json({
        success: true,
        message: "Vehicle deleted successfully"
    });

});



module.exports = router;
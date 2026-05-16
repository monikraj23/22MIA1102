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

    try {

        const vehicles = getAllVehicles();

        await Log(
            "backend",
            "info",
            "route",
            "Fetched all vehicles"
        );

        res.status(200).json({
            success: true,
            vehicles: vehicles
        });

    } catch (error) {

        await Log(
            "backend",
            "fatal",
            "route",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

});



// ADD VEHICLE

router.post("/vehicles", async (req, res) => {

    try {

        const newVehicle = req.body;

        // VALIDATION

        if (
            !newVehicle.id ||
            !newVehicle.vehicleNumber ||
            !newVehicle.status
        ) {

            await Log(
                "backend",
                "error",
                "handler",
                "Vehicle creation failed due to missing fields"
            );

            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });

        }

        addVehicle(newVehicle);

        await Log(
            "backend",
            "info",
            "controller",
            "New vehicle added successfully"
        );

        res.status(201).json({
            success: true,
            message: "Vehicle added successfully",
            vehicle: newVehicle
        });

    } catch (error) {

        await Log(
            "backend",
            "fatal",
            "route",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

});



// UPDATE VEHICLE

router.put("/vehicles/:id", async (req, res) => {

    try {

        const id = parseInt(req.params.id);

        const updatedData = req.body;

        updateVehicle(id, updatedData);

        await Log(
            "backend",
            "warn",
            "service",
            `Vehicle ${id} updated`
        );

        res.status(200).json({
            success: true,
            message: "Vehicle updated successfully"
        });

    } catch (error) {

        await Log(
            "backend",
            "fatal",
            "route",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

});



// DELETE VEHICLE

router.delete("/vehicles/:id", async (req, res) => {

    try {

        const id = parseInt(req.params.id);

        deleteVehicle(id);

        await Log(
            "backend",
            "error",
            "handler",
            `Vehicle ${id} deleted`
        );

        res.status(200).json({
            success: true,
            message: "Vehicle deleted successfully"
        });

    } catch (error) {

        await Log(
            "backend",
            "fatal",
            "route",
            error.message
        );

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }

});



module.exports = router;
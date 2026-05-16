const express = require("express");

const router = express.Router();

router.get("/vehicles", (req, res) => {

    res.json({
        success: true,
        vehicles: [
            {
                id: 1,
                vehicleNumber: "TN01AB1234",
                status: "active"
            },
            {
                id: 2,
                vehicleNumber: "TN02CD5678",
                status: "maintenance"
            }
        ]
    });

});

module.exports = router;
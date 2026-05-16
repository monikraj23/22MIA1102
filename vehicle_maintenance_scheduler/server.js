const express = require("express");
const cors = require("cors");

const vehicleRoutes = require("./routes/vehicleRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "Vehicle Maintenance Scheduler API Running"
    });

});

app.use("/api", vehicleRoutes);

app.listen(3000, () => {

    console.log("Server running on port 3000");

});
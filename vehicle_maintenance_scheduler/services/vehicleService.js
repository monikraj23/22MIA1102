let vehicles = [
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
];



// GET ALL VEHICLES

function getAllVehicles() {

    return vehicles;

}



// ADD VEHICLE

function addVehicle(newVehicle) {

    vehicles.push(newVehicle);

    return newVehicle;

}



// UPDATE VEHICLE

function updateVehicle(id, updatedData) {

    vehicles = vehicles.map(vehicle => {

        if (vehicle.id === id) {

            return {
                ...vehicle,
                ...updatedData
            };

        }

        return vehicle;

    });

}



// DELETE VEHICLE

function deleteVehicle(id) {

    vehicles = vehicles.filter(vehicle => vehicle.id !== id);

}



module.exports = {
    getAllVehicles,
    addVehicle,
    updateVehicle,
    deleteVehicle
};
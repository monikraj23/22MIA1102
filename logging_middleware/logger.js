require("dotenv").config();

const axios = require("axios");

const TOKEN = process.env.TOKEN;

async function Log(stack, level, packageName, message) {

    try {

        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack: stack,
                level: level,
                package: packageName,
                message: message
            },
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("LOG CREATED:", response.data);

    } catch (error) {

        console.log("LOG ERROR:", error.message);

    }

}

module.exports = Log;
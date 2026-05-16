const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtb25pa3Jhai5tdXJ1Z2FuczIwMjJAdml0c3R1ZGVudC5hYy5pbiIsImV4cCI6MTc3ODkyNjk3OSwiaWF0IjoxNzc4OTI2MDc5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZWE3ZmE4MzUtNzRkYi00MDc0LWJjZDYtNGIyNGNlMjMyMDlkIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibW9uaWsgcmFqIG11cnVnYW4gcyIsInN1YiI6Ijc0ZTYwOTUxLWNkZjktNDFhYS1hMjc2LWIwMDFjMDE1YzRkZiJ9LCJlbWFpbCI6Im1vbmlrcmFqLm11cnVnYW5zMjAyMkB2aXRzdHVkZW50LmFjLmluIiwibmFtZSI6Im1vbmlrIHJhaiBtdXJ1Z2FuIHMiLCJyb2xsTm8iOiIyMm1pYTExMDIiLCJhY2Nlc3NDb2RlIjoiU2ZGdVdnIiwiY2xpZW50SUQiOiI3NGU2MDk1MS1jZGY5LTQxYWEtYTI3Ni1iMDAxYzAxNWM0ZGYiLCJjbGllbnRTZWNyZXQiOiJaSHJRRlBFWlJXV2FOYkZWIn0.pBrXv2ZD4rGNtZEsrLKyOLpBZ5U_M-DG4vZ57VjO4sA";

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

        console.log(response.data);

    } catch (error) {

        console.log(error.message);

    }
}

module.exports = Log;
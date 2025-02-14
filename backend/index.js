const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");

dotenv.config();

const app = express();

console.log(process.env.MONGO_URL);

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB: ", error);
    });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const MainRoute = require("./route/main");

dotenv.config();

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000", // Дозволяє запити з фронтенду
        credentials: true,
    })
);

app.use("/", MainRoute);

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB: ", error);
    });

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

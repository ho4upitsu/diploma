const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const codeeditor = require("./route/codeeditor");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/express", codeeditor);

app.listen(5001, () => {
    console.log("Server is running on port 5000");
});

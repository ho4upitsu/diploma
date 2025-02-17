const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true,
    },
});

const Module = mongoose.model("Module", moduleSchema);
module.exports = Module;

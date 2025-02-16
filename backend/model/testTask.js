const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
    option: {
        type: String,
        required: true,
    },
});

const testTaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    options: [optionSchema],
    correctAnswer: {
        type: String,
        required: true,
    },
});

const TestTask = mongoose.model("TestTask", testTaskSchema);
module.exports = TestTask;

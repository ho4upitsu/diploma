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

const testGroupSchema = new mongoose.Schema({
    moduleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Module",
        required: true,
    },
    tests: [testTaskSchema],
});

const TestGroup = mongoose.model("TestGroup", testGroupSchema);
module.exports = TestGroup;

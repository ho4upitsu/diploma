const TaskGroup = require("../model/taskGroup");
const Module = require("../model/module");

const createTaskGroup = async (req, res) => {
    try {
        const { tests, moduleId } = req.body;

        const module = await Module.findById(moduleId);

        if (!module) {
            return res.status(404).json({ error: "Module not found" });
        }

        if (!Array.isArray(tests) || tests.length === 0) {
            return res
                .status(400)
                .json({ error: "Tests array is required and cannot be empty" });
        }

        for (const test of tests) {
            if (
                !test.options ||
                !Array.isArray(test.options) ||
                test.options.length === 0
            ) {
                return res
                    .status(400)
                    .json({ error: "Each test must have an options array" });
            }

            const isCorrectAnswerFound = test.options.some(
                (option) => option.option === test.correctAnswer
            );

            if (!isCorrectAnswerFound) {
                return res.status(400).json({
                    error: `Correct answer not found in options for test: ${test.title}`,
                });
            }
        }

        const testGroup = new TaskGroup({ tests, moduleId });
        await testGroup.save();

        res.status(201).json(testGroup);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

const getTaskGroup = async (req, res) => {
    try {
        const taskGroup = await TaskGroup.findById(req.params.id);
        if (!taskGroup) {
            return res.status(404).json({ error: "Tasks not found" });
        }
        res.status(200).json(taskGroup);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

const getAllTaskGroups = async (req, res) => {
    try {
        const taskGroups = await TaskGroup.find();
        if (!taskGroups) {
            return res.status(404).json({ error: "Test tasks not found" });
        }
        res.status(200).json(taskGroups);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

// const deleteTaskGroup = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const testTask = await TestTask.findByIdAndDelete(id);
//         if (!testTask) {
//             return res.status(404).json({ error: "Test task not found" });
//         }
//         res.status(200).json({ message: "Test task deleted successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Server error" });
//     }
// };

module.exports = {
    createTaskGroup,
    getTaskGroup,
    getAllTaskGroups,
};

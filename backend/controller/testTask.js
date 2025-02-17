const TestTask = require("../model/testTask");

const createTestTask = async (req, res) => {
    try {
        const { title, options, correctAnswer } = req.body;

        // Перевіряємо, чи correctAnswer є серед options
        const isCorrectAnswerFound = options.some(
            (option) => option.option === correctAnswer
        );

        if (!isCorrectAnswerFound) {
            return res
                .status(400)
                .json({ error: "Correct answer not found in options" });
        }

        const testTask = new TestTask({ title, options, correctAnswer });
        await testTask.save();

        res.status(201).json(testTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

const getTestTask = async (req, res) => {
    try {
        const testTask = await TestTask.findById(req.params.id);
        if (!testTask) {
            return res.status(404).json({ error: "Test task not found" });
        }
        res.status(200).json(testTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

const getAllTestTasks = async (req, res) => {
    try {
        const testTasks = await TestTask.find();
        if (!testTasks) {
            return res.status(404).json({ error: "Test tasks not found" });
        }
        res.status(200).json(testTasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

const deleteTestTask = async (req, res) => {
    try {
        const { id } = req.params;
        const testTask = await TestTask.findByIdAndDelete(id);
        if (!testTask) {
            return res.status(404).json({ error: "Test task not found" });
        }
        res.status(200).json({ message: "Test task deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

const checkTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { answer } = req.body;

        const testTask = await TestTask.findById(id);
        if (!testTask) {
            return res.status(404).json({ message: "Test task not found" });
        }
        if (!answer) {
            return res.status(400).json({ message: "Answer is required" });
        }
        if (answer === testTask.correctAnswer) {
            return res.status(200).json({ message: "Correct answer" });
        }
        return res.status(400).json({ message: "Incorrect answer" });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    createTestTask,
    getTestTask,
    deleteTestTask,
    getAllTestTasks,
    checkTask,
};

const Module = require("../model/module");

const createModule = async (req, res) => {
    try {
        const { name, description, difficulty } = req.body;
        const module = new Module({ name, description, difficulty });
        await module.save();
        return res.status(201).json(module);
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
};

const getAllModules = async (req, res) => {
    try {
        const modules = await Module.find();
        return res.status(200).json(modules);
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
};

const getModule = async (req, res) => {
    try {
        const module = await Module.findById(req.params.id);
        if (!module) {
            return res.status(404).json({ error: "Module not found" });
        }
        return res.status(200).json(module);
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
};

const deleteModule = async (req, res) => {
    try {
        const module = await Module.findByIdAndDelete(req.params.id);
        if (!module) {
            return res.status(404).json({ error: "Module not found" });
        }
        return res.status(200).json({ message: "Module deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
};

module.exports = { createModule, getAllModules, getModule, deleteModule };

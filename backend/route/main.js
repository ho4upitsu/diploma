const router = require("express").Router();
const UserRoute = require("./user");
const CodeEditorRoute = require("./codeeditor");
const TaskGroupeRoute = require("./taskGroup");
const ModuleRoute = require("../route/module");

router.use("/auth", UserRoute);
router.use("/code", CodeEditorRoute);
router.use("/task", TaskGroupeRoute);
router.use("/module", ModuleRoute);

module.exports = router;

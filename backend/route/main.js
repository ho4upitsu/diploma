const router = require("express").Router();
const UserRoute = require("./user");
const CodeEditorRoute = require("./codeeditor");
const TestTaskRoute = require("./testTask");
const ModuleRoute = require("../route/module");

router.use("/auth", UserRoute);
router.use("/code", CodeEditorRoute);
router.use("/test", TestTaskRoute);
router.use("/module", ModuleRoute);

module.exports = router;

const router = require("express").Router();
const UserRoute = require("./user");
const CodeEditorRoute = require("./codeeditor");
const TestTaskRoute = require("./testTask");

router.use("/auth", UserRoute);
router.use("/code", CodeEditorRoute);
router.use("/test", TestTaskRoute);

module.exports = router;

const router = require("express").Router();
const UserRoute = require("./user");
const CodeEditorRoute = require("./codeeditor");

router.use("/auth", UserRoute);
router.use("/code", CodeEditorRoute);

module.exports = router;

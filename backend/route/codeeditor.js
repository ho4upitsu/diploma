const router = require("express").Router();
const CodeEditorController = require("../controller/codeeditor");

router.post("/execute", CodeEditorController.executeCode);

module.exports = router;

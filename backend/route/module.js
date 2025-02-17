const router = require("express").Router();
const moduleController = require("../controller/module");

router.post("/createModule", moduleController.createModule);
router.get("/getAllModules", moduleController.getAllModules);
router.get("/getModule/:id", moduleController.getModule);
router.delete("/deleteModule/:id", moduleController.deleteModule);

module.exports = router;

const router = require("express").Router();
const testTaskController = require("../controller/testTask");

router.post("/createTestTast", testTaskController.createTestTask);
router.get("/getTestTask/:id", testTaskController.getTestTask);
router.delete("/deleteTestTask/:id", testTaskController.deleteTestTask);

module.exports = router;

const router = require("express").Router();
const taskGroupController = require("../controller/taskGroup");

router.post("/createTaskGroup", taskGroupController.createTaskGroup);
router.get("/getAllTaskGroups", taskGroupController.getAllTaskGroups);
router.get("/getTaskGroup/:id", taskGroupController.getTaskGroup);
router.get(
    "/getTaskGroupsByModuleId/:id",
    taskGroupController.getTaskGropsByModuleId
);
//router.delete("/deleteTestTask/:id", testTaskController.deleteTestTask);

module.exports = router;

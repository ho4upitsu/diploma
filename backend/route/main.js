const router = require("express").Router();
const UserRoute = require("./user");

router.use("/auth", UserRoute);

module.exports = router;

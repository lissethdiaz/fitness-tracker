const router = require("express").Router();
const userRoutes = require("./user");
const historyRoutes = require("./history");

router.use("/users", userRoutes);
router.use("/history", historyRoutes);

module.exports = router;

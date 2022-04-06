const router = require("express").Router();
const userRoutes = require("./user");
const historyRoutes = require("./history");
const trackRoutes = require("./track");

router.use("/users", userRoutes);
router.use("/track", trackRoutes);
router.use("/history", historyRoutes);

module.exports = router;

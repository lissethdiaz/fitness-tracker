const router = require("express").Router();
const { createCardio, createResistance } = require("../../controllers/track");

// /api/history
router.route("/cardio").put(createCardio);
router.route("/resistance").put(createResistance);

module.exports = router;

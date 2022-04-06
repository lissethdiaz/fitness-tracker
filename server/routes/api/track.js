const router = require("express").Router();
const { createCardio, createResistance } = require("../../controllers/track");

// /api/track
router.route("/cardio").post(createCardio);
router.route("/resistance").post(createResistance);

module.exports = router;

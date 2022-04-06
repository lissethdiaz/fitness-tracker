const router = require("express").Router();
const {
  getAllCardio,
  getCardioById,
  deleteCardio,
  getAllResistance,
  getResistanceById,
  deleteResistance,
} = require("../../controllers/history");

// /api/history/cardio
router.route("/cardio").get(getAllCardio);
router.route("/cardio/:id").get(getCardioById).delete(deleteCardio);

// /api/history/resistance
router.route("/resistance").get(getAllResistance);
router.route("/resistance/:id").get(getResistanceById).delete(deleteResistance);

module.exports = router;

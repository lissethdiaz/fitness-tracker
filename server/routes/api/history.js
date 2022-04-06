const router = require("express").Router();
const {
  getAllCardio,
  getCardioById,
  deleteCardio,
  getAllResistance,
  getResistanceById,
  deleteResistance,
} = require("../../controllers/history");

// /api/history
router.route("/").get(getAllCardio).get(getAllResistance);

// /api/history/:id
router
  .route("/:id")
  .get(getCardioById)
  .get(getResistanceById)
  .delete(deleteCardio)
  .delete(deleteResistance);

module.exports = router;

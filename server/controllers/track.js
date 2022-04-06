const { Cardio, Resistance } = require("../models");

const trackController = {
  // create cardio
  createCardio({ body }, res) {
    Cardio.create(body)
      .then((dbCardioData) => res.json(dbCardioData))
      .catch((err) => res.json(err));
  },

  // create Resistance
  createResistance({ body }, res) {
    Resistance.create(body)
      .then((dbResistanceData) => res.json(dbResistanceData))
      .catch((err) => res.json(err));
  },
};

module.exports = trackController;

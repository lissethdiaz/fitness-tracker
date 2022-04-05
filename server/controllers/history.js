const { Cardio, Resistance } = require("../models");

const historyController = {
  // get all Cardios
  getAllCardio(req, res) {
    Cardio.find({})
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbCardioData) => res.json(dbCardioData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one Cardio by id
  getCardioById({ params }, res) {
    Cardio.findOne({ _id: params.id })
      .select("-__v")
      .then((dbCardioData) => res.json(dbCardioData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // delete Cardio
  deleteCardio({ params }, res) {
    Cardio.findOneAndDelete({ _id: params.id })
      .then((dbCardioData) => res.json(dbCardioData))
      .catch((err) => res.json(err));
  },

  // get all Resistance
  getAllResistance(req, res) {
    Resistance.find({})
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbResistanceData) => res.json(dbResistanceData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // get one Resistance by id
  getResistanceById({ params }, res) {
    Cardio.findOne({ _id: params.id })
      .select("-__v")
      .then((dbResistanceData) => res.json(dbResistanceData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // delete Resistance
  deleteResistance({ params }, res) {
    Resistance.findOneAndDelete({ _id: params.id })
      .then((dbResistanceData) => res.json(dbResistanceData))
      .catch((err) => res.json(err));
  },
};

module.exports = historyController;

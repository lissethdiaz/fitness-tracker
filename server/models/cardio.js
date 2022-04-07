const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const cardioSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Cardio = model("Cardio", cardioSchema);

module.exports = Cardio;

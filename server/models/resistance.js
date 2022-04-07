const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const resistanceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    sets: {
      type: Number,
      required: true,
    },
    reps: {
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

const Resistance = model("Resistance", resistanceSchema);

module.exports = Resistance;

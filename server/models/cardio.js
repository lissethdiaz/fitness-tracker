const { Schema, model } = require("mongoose");

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
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Cardio = model("Cardio", cardioSchema);

module.exports = Cardio;

const { Schema, model } = require("mongoose");

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
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Resistance = model("Resistance", resistanceSchema);

module.exports = Resistance;

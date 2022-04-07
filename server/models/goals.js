const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const goalSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      max: 120,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Goal = model("Goal", goalSchema);

module.exports = Goal;

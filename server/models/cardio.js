const { Schema, model } = require('mongoose');

const cardioSchema = new Schema(
{
  title: {
    type: String,
    required: true
  },
  distance: {
    type: Number,
    required: true
  },
  time: {
    type: Number,
    required: true
  }
},
{
  toJSON: {
    virtuals: true,
  }
}
);

const Cardio = model('Cardio', cardioSchema);

module.exports = Cardio;
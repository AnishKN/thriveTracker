const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  payload: {
    type: [
      {
        question: {
          type: String,
          required: true
        },
        options: {
          type: [String],
          required: true
        },
        correctOption: {
          type: String,
          required: true
        },
        point: {
          type: Number,
          required: true
        }
      }
    ],
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;

const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  testName: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  facultyId: {
    type: String,
    required: true
  },
  testType: {
    type: String,
    required: true
  },
  testPayload: {
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
  score: {
    type: Number,
    required: true
  }
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;

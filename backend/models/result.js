const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  testName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  facultyName: {
    type: String,
    required: true
  },
  testPayload: {
    type: String,
    required: true
  },
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;

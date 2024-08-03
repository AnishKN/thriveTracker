const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  facultyName: {
    type: String,
    required: true,
  },
  allowedStudents: {
    type: Number,
    default: null,
  },
  testData: {
    type: String,
    default: null,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const Test = mongoose.model("Test", testSchema);

module.exports = Test;

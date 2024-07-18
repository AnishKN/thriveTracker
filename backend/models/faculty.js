const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  department: {
    type: String,
    default: null
  },
  mentees: {
    type: [String], // Array of student IDs
    default: []
  },
  password: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;

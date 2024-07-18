const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
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
  mentor: {
    type: String, // Faculty ID
    default: null
  },
  department: {
    type: String,
    default: null
  },
  USN: {
    type: String,
    default: null,
    unique: true
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

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

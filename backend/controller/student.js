const Student = require('../models/student');

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one student
exports.getStudentById = async (req, res) => {
  res.json(res.student);
};

// Create a student
exports.createStudent = async (req, res) => {
  const student = new Student({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    department: req.body.department,
    USN: req.body.usn,
    password: req.body.password,
    active: req.body.active
  });

  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a student
exports.updateStudent = async (req, res) => {
  if (req.body.name != null) {
    res.student.name = req.body.name;
  }
  if (req.body.email != null) {
    res.student.email = req.body.email;
  }
  if (req.body.phone != null) {
    res.student.phone = req.body.phone;
  }
  if (req.body.mentor != null) {
    res.student.mentor = req.body.mentor;
  }
  if (req.body.department != null) {
    res.student.department = req.body.department;
  }
  if (req.body.USN != null) {
    res.student.USN = req.body.USN;
  }
  if (req.body.password != null) {
    res.student.password = req.body.password;
  }
  if (req.body.active != null) {
    res.student.active = req.body.active;
  }
  try {
    const updatedStudent = await res.student.save();
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a student
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Cannot find student' });
    }
    res.json({ message: 'Deleted Student' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Middleware to get student by ID
exports.getStudent = async (req, res, next) => {
  let student;
  try {
    student = await Student.findById(req.params.id);
    if (student == null) {
      return res.status(404).json({ message: 'Cannot find student' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.student = student;
  next();
};

const Faculty = require('../models/faculty');

// Get all faculties
exports.getAllFaculties = async (req, res) => {
  try {
    const faculties = await Faculty.find();
    res.json(faculties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one faculty
exports.getFacultyById = async (req, res) => {
  res.json(res.faculty);
};

// Create a faculty
exports.createFaculty = async (req, res) => {
  const faculty = new Faculty({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    department: req.body.department,
    mentees: req.body.mentees,
    password: req.body.password,
    active: req.body.active
  });

  try {
    const newFaculty = await faculty.save();
    res.status(201).json(newFaculty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a faculty
exports.updateFaculty = async (req, res) => {
  if (req.body.name != null) {
    res.faculty.name = req.body.name;
  }
  if (req.body.email != null) {
    res.faculty.email = req.body.email;
  }
  if (req.body.phone != null) {
    res.faculty.phone = req.body.phone;
  }
  if (req.body.department != null) {
    res.faculty.department = req.body.department;
  }
  if (req.body.mentees != null) {
    res.faculty.mentees = req.body.mentees;
  }
  if (req.body.password != null) {
    res.faculty.password = req.body.password;
  }
  if (req.body.active != null) {
    res.faculty.active = req.body.active;
  }
  try {
    const updatedFaculty = await res.faculty.save();
    res.json(updatedFaculty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a faculty
exports.deleteFaculty = async (req, res) => {
  try {
    await res.faculty.remove();
    res.json({ message: 'Deleted Faculty' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Middleware to get faculty by ID
exports.getFaculty = async (req, res, next) => {
  let faculty;
  try {
    faculty = await Faculty.findById(req.params.id);
    if (faculty == null) {
      return res.status(404).json({ message: 'Cannot find faculty' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.faculty = faculty;
  next();
};
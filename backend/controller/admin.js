const Admin = require('../models/admin');

// Get all admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one admin
exports.getAdminById = async (req, res) => {
  res.json(res.admin);
};

// Create an admin
exports.createAdmin = async (req, res) => {
  const admin = new Admin({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    active: req.body.active
  });

  try {
    const newAdmin = await admin.save();
    res.status(201).json(newAdmin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an admin
exports.updateAdmin = async (req, res) => {
  if (req.body.name != null) {
    res.admin.name = req.body.name;
  }
  if (req.body.email != null) {
    res.admin.email = req.body.email;
  }
  if (req.body.phone != null) {
    res.admin.phone = req.body.phone;
  }
  if (req.body.password != null) {
    res.admin.password = req.body.password;
  }
  if (req.body.active != null) {
    res.admin.active = req.body.active;
  }
  try {
    const updatedAdmin = await res.admin.save();
    res.json(updatedAdmin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an admin
exports.deleteAdmin = async (req, res) => {
  try {
    await res.admin.remove();
    res.json({ message: 'Deleted Admin' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Middleware to get admin by ID
exports.getAdmin = async (req, res, next) => {
  let admin;
  try {
    admin = await Admin.findById(req.params.id);
    if (admin == null) {
      return res.status(404).json({ message: 'Cannot find admin' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.admin = admin;
  next();
};

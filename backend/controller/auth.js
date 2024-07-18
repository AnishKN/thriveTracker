const Admin = require('../models/admin');
const Faculty = require('../models/faculty');
const Student = require('../models/student');
const { hashPassword, comparePassword, generateToken } = require('../authentication/auth');

const authenticateUser = async (UserModel, req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    const token = generateToken(user);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const registerUser = async (UserModel, req, res) => {
  const { email, password, ...otherFields } = req.body;
  console.log(req.body);
  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await hashPassword(password);
    const user = new UserModel({ email, password: hashedPassword, ...otherFields });
    await user.save();

    const token = generateToken(user);
    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.registerAdmin = (req, res) => {
  registerUser(Admin, req, res);
};

exports.registerFaculty = (req, res) => {
  registerUser(Faculty, req, res);
};

exports.registerStudent = (req, res) => {
  registerUser(Student, req, res);
};

exports.loginAdmin = (req, res) => {
  authenticateUser(Admin, req, res);
};

exports.loginFaculty = (req, res) => {
  authenticateUser(Faculty, req, res);
};

exports.loginStudent = (req, res) => {
  authenticateUser(Student, req, res);
};
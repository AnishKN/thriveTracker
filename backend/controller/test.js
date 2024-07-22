const Test = require('../models/test');

// Get all tests
exports.getAllTests = async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one test
exports.getTestById = async (req, res) => {
  res.json(res.test);
};

// Create a test
exports.createTest = async (req, res) => {
  const test = new Test({
    facultyName: req.body.facultyName,
    allowedStudents: req.body.allowedStudents,
    testData: req.body.testData,
    active: req.body.active
  });

  try {
    const newTest = await test.save();
    res.status(201).json({ message: "Successfully added!", data: newTest });
  } catch (err) {
    res.status(200).json({ message: "Saved with possible issues", error: err.message });
  }
};

// Update a test
exports.updateTest = async (req, res) => {
  if (req.body.name != null) {
    res.test.name = req.body.name;
  }
  if (req.body.type != null) {
    res.test.type = req.body.type;
  }
  if (req.body.instructions != null) {
    res.test.instructions = req.body.instructions;
  }
  if (req.body.payload != null) {
    res.test.payload = req.body.payload;
  }
  if (req.body.active != null) {
    res.test.active = req.body.active;
  }
  try {
    const updatedTest = await res.test.save();
    res.json(updatedTest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a test
exports.deleteTest = async (req, res) => {
  try {
    await res.test.remove();
    res.json({ message: 'Deleted Test' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Middleware to get test by ID
exports.getTest = async (req, res, next) => {
  let test;
  try {
    test = await Test.findById(req.params.id);
    if (test == null) {
      return res.status(404).json({ message: 'Cannot find test' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.test = test;
  next();
};

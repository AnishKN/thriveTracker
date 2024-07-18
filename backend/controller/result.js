const Result = require('../models/result');

// Get all results
exports.getAllResults = async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one result
exports.getResultById = async (req, res) => {
  res.json(res.result);
};

// Create a result
exports.createResult = async (req, res) => {
  const result = new Result({
    id: req.body.id,
    testName: req.body.testName,
    userId: req.body.userId,
    facultyId: req.body.facultyId,
    testType: req.body.testType,
    testPayload: req.body.testPayload,
    score: req.body.score
  });

  try {
    const newResult = await result.save();
    res.status(201).json(newResult);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a result
exports.updateResult = async (req, res) => {
  if (req.body.testName != null) {
    res.result.testName = req.body.testName;
  }
  if (req.body.userId != null) {
    res.result.userId = req.body.userId;
  }
  if (req.body.facultyId != null) {
    res.result.facultyId = req.body.facultyId;
  }
  if (req.body.testType != null) {
    res.result.testType = req.body.testType;
  }
  if (req.body.testPayload != null) {
    res.result.testPayload = req.body.testPayload;
  }
  if (req.body.score != null) {
    res.result.score = req.body.score;
  }
  try {
    const updatedResult = await res.result.save();
    res.json(updatedResult);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a result
exports.deleteResult = async (req, res) => {
  try {
    await res.result.remove();
    res.json({ message: 'Deleted Result' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Middleware to get result by ID
exports.getResult = async (req, res, next) => {
  let result;
  try {
    result = await Result.findById(req.params.id);
    if (result == null) {
      return res.status(404).json({ message: 'Cannot find result' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.result = result;
  next();
};

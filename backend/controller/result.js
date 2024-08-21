const Result = require('../models/result');

// Save result to the database
exports.createResult = async (req, res) => {
  const { testName, userName, facultyName, testPayload } = req.body;

  try {
    const newResult = new Result({
      testName,
      userName,
      facultyName,
      testPayload: JSON.stringify(testPayload), // Storing testPayload as a JSON string
    });

    await newResult.save();
    res.status(201).json({ message: 'Result saved successfully', result: newResult });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save the result', error: error.message });
  }
};

// Fetch all results
exports.getAllResults = async (req, res) => {
  try {
    const results = await Result.find();
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch results', error: error.message });
  }
};

// Fetch a single result by ID
exports.getResultById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Result.findById(id);

    if (!result) {
      return res.status(404).json({ message: 'Result not found' });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch the result', error: error.message });
  }
};

const express = require('express');
const resultController = require('../controller/result.js');

const router = express.Router();

// POST request to save a result
router.post('/save', resultController.createResult);

// GET request to fetch all results
router.get('/all', resultController.getAllResults);

// GET request to fetch a specific result by ID
router.get('/:id', resultController.getResultById);

module.exports = router;
 
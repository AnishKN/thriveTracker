const express = require('express');
const router = express.Router();
const testController = require('../controller/test');

router.get('/', testController.getAllTests);
router.get('/:id', testController.getTest, testController.getTestById);
router.post('/', testController.createTest);
router.patch('/:id', testController.getTest, testController.updateTest);
router.delete('/:id', testController.getTest, testController.deleteTest);

module.exports = router;

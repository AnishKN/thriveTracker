const express = require('express');
const router = express.Router();
const resultController = require('../controller/result');

router.get('/', resultController.getAllResults);
router.get('/:id', resultController.getResult, resultController.getResultById);
router.post('/', resultController.createResult);
router.patch('/:id', resultController.getResult, resultController.updateResult);
router.delete('/:id', resultController.getResult, resultController.deleteResult);

module.exports = router;

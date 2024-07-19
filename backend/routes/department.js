const express = require('express');
const router = express.Router();
const departmentController = require('../controller/department.js');

router.get('/', facultyController.getAllFaculties);
router.post('/', facultyController.createFaculty);
router.patch('/:id', facultyController.getFaculty, facultyController.updateFaculty);
router.delete('/:id', facultyController.getFaculty, facultyController.deleteFaculty);

module.exports = router;

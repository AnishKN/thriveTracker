const express = require('express');
const router = express.Router();
const facultyController = require('../controller/faculty');

router.get('/', facultyController.getAllFaculties);
router.get('/:id', facultyController.getFaculty, facultyController.getFacultyById);
router.post('/', facultyController.createFaculty);
router.patch('/:id', facultyController.getFaculty, facultyController.updateFaculty);
router.delete('/:id', facultyController.getFaculty, facultyController.deleteFaculty);

module.exports = router;

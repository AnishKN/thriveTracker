const express = require('express');
const router = express.Router();
const studentController = require('../controller/student');

router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudent, studentController.getStudentById);
router.post('/', studentController.createStudent);
router.patch('/:id', studentController.getStudent, studentController.updateStudent);
router.delete('/:id', studentController.getStudent, studentController.deleteStudent);

module.exports = router;

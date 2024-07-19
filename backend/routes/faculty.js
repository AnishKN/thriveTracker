const express = require('express');
const router = express.Router();
const facultyController = require('../controller/faculty');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.get('/', facultyController.getAllFaculties);
router.get('/:id', facultyController.getFaculty, facultyController.getFacultyById);
router.post('/', facultyController.createFaculty);
router.patch('/:id', facultyController.getFaculty, facultyController.updateFaculty);
router.delete('/:id', facultyController.getFaculty, facultyController.deleteFaculty);

// New route for CSV upload
router.post('/upload', upload.single('file'), facultyController.uploadCSV);

module.exports = router;

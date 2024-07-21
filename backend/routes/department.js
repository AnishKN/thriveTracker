const express = require('express');
const router = express.Router();
const departmentController = require('../controller/department.js');

router.get('/', departmentController.getAllDepartments);
router.post('/', departmentController.createDepartment);
router.patch('/:id', departmentController.getDepartment, departmentController.updateDepartment);
router.delete('/:id', departmentController.getDepartment, departmentController.deleteDepartment);

module.exports = router;

const express = require('express');
const router = express.Router();
const auth = require('../controller/auth');

// Admin registration and login
router.post('/admin/register', auth.registerAdmin);
router.post('/admin/login', auth.loginAdmin);

// Faculty registration and login
router.post('/faculty/register', auth.registerFaculty);
router.post('/faculty/login', auth.loginFaculty);

// Student registration and login
router.post('/student/register', auth.registerStudent);
router.post('/student/login', auth.loginStudent);

module.exports = router;

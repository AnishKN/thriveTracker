const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin');

router.get('/', adminController.getAllAdmins);
router.get('/:id', adminController.getAdmin, adminController.getAdminById);
router.post('/', adminController.createAdmin);
router.patch('/:id', adminController.getAdmin, adminController.updateAdmin);
router.delete('/:id', adminController.getAdmin, adminController.deleteAdmin);

module.exports = router;

// controller - department.js
const Department = require('../models/department');

// Middleware to get department by ID
async function getDepartment(req, res, next) {
    let department;
    try {
        department = await Department.findById(req.params.id);
        if (department == null) {
            return res.status(404).json({ message: 'Cannot find department' });
        }
    } catch (err) {
        return res.status(500).json({ message: 'Error retrieving department', error: err.message });
    }

    res.department = department;
    next();
}

// Get all departments
async function getAllDepartments(req, res) {
    try {
        const departments = await Department.find();
        res.json({
            message: 'Departments retrieved successfully',
            data: departments
        });
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving departments', error: err.message });
    }
}

// Create a new department
async function createDepartment(req, res) {
    try {
        const existingDepartment = await Department.findOne({ name: req.body.name, hodName: req.body.hodName });
        if (existingDepartment) {
            return res.status(400).json({ message: 'Department with the same name and HOD already exists' });
        }

        const department = new Department({
            name: req.body.name,
            hodName: req.body.hodName,
        });

        const newDepartment = await department.save();
        res.status(201).json({
            message: 'Department created successfully',
            data: newDepartment
        });
    } catch (err) {
        res.status(400).json({ message: 'Error creating department', error: err.message });
    }
}

// Update a department
async function updateDepartment(req, res) {
    if (req.body.name != null) {
        res.department.name = req.body.name;
    }
    if (req.body.hodName != null) {
        res.department.hodName = req.body.hodName;
    }
    if (req.body.active != null) {
        res.department.active = req.body.active;
    }

    try {
        const updatedDepartment = await res.department.save();
        res.json({
            message: 'Department updated successfully',
            data: updatedDepartment
        });
    } catch (err) {
        res.status(400).json({ message: 'Error updating department', error: err.message });
    }
}

// Delete a department
async function deleteDepartment(req, res) {
    try {
        const departmentId = req.params.id; // Assuming you're using an ID parameter to identify the department

        const deletedDepartment = await Department.findByIdAndDelete(departmentId);

        if (!deletedDepartment) {
            return res.status(404).json({ message: 'Department not found' });
        }

        res.json({ message: 'Department deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting department', error: err.message });
    }
}

module.exports = {
    getDepartment,
    getAllDepartments,
    createDepartment,
    updateDepartment,
    deleteDepartment,
};

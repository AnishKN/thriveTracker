// model - department.js
const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    hodName: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
});

departmentSchema.index({ name: 1, hodName: 1 }, { unique: true });

const Department = mongoose.model("department", departmentSchema);
module.exports = Department;

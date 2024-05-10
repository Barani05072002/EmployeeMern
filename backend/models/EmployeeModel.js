const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    designation: String,
    course: String,
    gender: String,
    createDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Employee', employeeSchema);

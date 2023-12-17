const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    employee_id: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department' 
    }
});

const Employee = mongoose.model('Employee', employeeSchema); 
module.exports = Employee;

const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserSchema =new Schema({
    userName : {
        type : "String",
        require : [true,'Please insert the name']
    },
    password : {
        type : "String",
        require : [true,'Please insert the password'],
        minLength : 8
    }
})
const EmployeeSchema = new Schema({
    Name:{
        type : String,
        require : true,
    },
    Email:{
        type : String,
        require : true,
        unique : true,
        lowercase : true
    },
    Mobile:{
        type : String,
        require : true
    },
    Designation:{
        type : String,
        enum : ['HR','Manager','Sales'],
        default : 'Sales',
    },
    Gender : {
        type : String,
        enum : ['Male','Female'],
        require : [true,'Please specify the gender']
    },
    Course : {
        type : String,
        enum : ['MCA','BCA','BSc'],
        default : 'Bsc',
    },
    CreatedAt : {
        type : Date,
        default : Date.now(),
    }
})

const Employee = mongoose.model("Employee",EmployeeSchema)
const User = mongoose.model("User",UserSchema)

module.exports = {Employee,User};

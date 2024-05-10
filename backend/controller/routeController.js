const {Employee} = require("../models/DBModel")
const {validateEmail,numericCheck} = require("./checkers")

const createEmployee = async (req,res)=>{
    const {Name,Email,Mobile,Designation,Gender,Course} = req.body

    if(validateEmail(Email)){
        return res.status(400).json({message : "Invalid mail id"})
    }
    if(numericCheck(Mobile)){
        return res.status(400).json({message : "Invalid mobile number"})
    }
    try{
        const emp = await Employee.create({Name,Email,Mobile,Designation,Gender,Course})
        res.status(200).json(emp)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}
const getAllEmployee = async (req,res)=>{
    try{
        const emp = await Employee.find({})
        res.status(200).json(emp)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

const getSingleEmployee = async(req,res)=>{
        const {id} = req.params
        if(!mongo.Types.ObjectId.isValid(id))
            return res.status(400).json({message:"Task Not found"})

        try{
            const singleEmp = await Employee.findById(id)
            res.status(200).json(singleEmp)
        }catch(err){
            res.status(400).json({error:err.message})
        }
}

const updateEmployee = async(req,res)=>{
    const {id} = req.params
    if(!mongo.Types.ObjectId.isValid(id))
        res.status(400).json({message:"Task not found"})

    try{
        const emp = await Employee.findByIdAndUpdate({_id:id}
            ,{...req.body})
        res.status(200).json({emp})
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

const deleteEmployee = async(req,res)=>{
    const {id} = req.params;
    if(!mongo.Types.ObjectId.isValid(id))
        res.status(400).json({message:"Task not found"})

    try{
        const emp = await Employee.findByIdAndDelete(id)
        res.status(200).json(emp)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = {
    createEmployee,
    getAllEmployee,
    getSingleEmployee,
    updateEmployee,
    deleteEmployee
}
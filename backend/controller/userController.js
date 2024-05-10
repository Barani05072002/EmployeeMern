// userController.js
const {User} = require('../models/DBModel');

const createUser = async (req, res) => {
    const {userName,password} = req.body
    try {
        const user = await User.create({userName,password})
        res.status(201).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {createUser,getUser}
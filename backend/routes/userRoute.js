const express = require("express")
const {createUser,getUser} = require("../controller/userController")

const userRouter = express.Router();
userRouter.post('/user',createUser);
userRouter.get('/user/:id',getUser);

module.exports = userRouter
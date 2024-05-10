const express = require("express");
const {createEmployee,getAllEmployee,getSingleEmployee,
    updateEmployee,
    deleteEmployee
} = require("../controller/routeController")

const empRouter = express.Router();
empRouter.post("/emp/",createEmployee);
empRouter.get("/emp/:id",getSingleEmployee);
empRouter.get("/emp/",getAllEmployee);
empRouter.patch("/emp/:id",updateEmployee);
empRouter.delete("/emp/:id",deleteEmployee);

module.exports = empRouter

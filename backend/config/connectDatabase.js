const mongoose = require("mongoose")

const connectDatabase = ()=>{
    console.log(process.env.DB_URL)
    mongoose.connect("mongodb://127.0.0.1:27017/company")
    .then((con)=>console.log("Database connected successfully in"+con.connection.host))
    .catch((err)=>console.log("Database connection failed error"+err.message))
}

module.exports = connectDatabase;
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const connectDatabase = require("./config/connectDatabase");
const bodyParser = require("body-parser");
// const {empRouter} = require("./routes/empRoute");
const userRouter = require('./routes/userRoute');
const empRouter =require("./routes/empRoute")

connectDatabase();
const app = express();
dotenv.config({path: path.join(__dirname,'config','.env')})

app.use(cors);
app.use(bodyParser.json());
app.use("/api",empRouter);
app.use("/api",userRouter);

app.listen(process.env.PORT,()=>{
    console.log(`app listed on ${process.env.PORT} on ${process.env.MODE} mode...`)
})
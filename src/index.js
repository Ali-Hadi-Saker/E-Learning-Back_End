import express from "express";
import dotenv from "dotenv"
import connectToDatabase from "./database/connection.js";

const app = express()

dotenv.config()


app.listen(8080, ()=>{
    console.log("server running on port 8080");
    connectToDatabase()
})



import express, { json } from "express";
import dotenv from "dotenv"
import connectToDatabase from "./database/connection.js";
import userRoutes from "./routes/users.routes.js"

const app = express()

dotenv.config()
app.use(express.json())

app.use('/users', userRoutes)

app.listen(8080, ()=>{
    console.log("server running on port 8080");
    connectToDatabase()
})



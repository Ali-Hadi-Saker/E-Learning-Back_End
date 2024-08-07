import express, { json } from "express";
import dotenv from "dotenv"
import connectToDatabase from "./database/connection.js";
import userRoutes from "./routes/users.routes.js"
import classRoutes from "./routes/classes.routes.js"
import fileRoutes from "./routes/file.routes.js"
import cors from "cors"

const app = express()
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    credentials: true,
})); 

dotenv.config()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/classes', classRoutes)
app.use('/files', fileRoutes)


app.listen(8080, ()=>{
    console.log("server running on port 8080");
    connectToDatabase()
})



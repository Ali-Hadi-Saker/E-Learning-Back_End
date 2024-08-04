import mongoose from "mongoose";


const connectToDatabase = async () => {
    await mongoose.connect(process.env.DATABASE_URL)
    console.log("server running");
}

export default connectToDatabase
import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username:{
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String, 
        unique: true,
    },
    password: {
        required: true,
        type: String
    },
    role: {
        required: true,
        enum: ['student', 'admin'],
        default: 'student'
    }
})

export const User = mongoose.model('User', userSchema)
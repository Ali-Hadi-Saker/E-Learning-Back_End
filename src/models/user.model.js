import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    name:{
        
        type: String,
        required: true,
    },
    email: {
        
        type: String, 
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        
    },
    role: {
        type: String,
        enum: ['student', 'admin'],
        default: 'student'
    },
    enrolledClasses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }]
})

export const User = mongoose.model('User', userSchema)
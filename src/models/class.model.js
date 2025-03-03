import mongoose, {Schema} from "mongoose"


const classSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    instructor:{
        type: String,
        required: true,
    },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    files: [
            {
            filename: { type: String },
            fileUrl: { type: String },
            }
        ]
})

export const Class = mongoose.model("Class", classSchema)
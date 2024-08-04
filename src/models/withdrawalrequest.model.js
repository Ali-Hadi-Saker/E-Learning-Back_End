import mongoose, {Schema} from "mongoose";


const withdrawalSchema = new Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Rejected', 'Approved']
    }
})

export const WithdrawlRequest = mongoose.model('WithdrawlRequest', withdrawalSchema)
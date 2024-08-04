import mongoose, {Schema} from "mongoose";


const withdrawalSchema = new Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
 
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
   
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
import mongoose, {Schema} from "mongoose"


const fileSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      path: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        enum: ['pdf', 'doc', 'ppt', 'other'],
        required: true,
      },
      class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',

      },
    });

export const File = mongoose.model('File', fileSchema)
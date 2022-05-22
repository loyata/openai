import mongoose from "mongoose";

const postSchema = mongoose.Schema({
        prompt: String,
        response: String,
        createdAt: {
            type: Date,
            default: new Date()
        },
        location: String,
        country:String,
        model:String
    }
);

export default mongoose.model('PostMessage', postSchema);
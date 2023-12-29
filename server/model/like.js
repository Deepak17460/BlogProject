import mongoose from 'mongoose';

const LikeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    },
    likesCount: {
        type: Number,
         default: 20 ,
        required:false
    }
});


const like = mongoose.model('like', LikeSchema);

export default like;
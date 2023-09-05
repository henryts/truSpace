import mongoose from "mongoose";


const commentSchema = new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        postId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post",
            required:true
        },

    });


    const SavePost = mongoose.model("SavePost",commentSchema);
export default SavePost;
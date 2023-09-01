import mongoose from "mongoose";
import Post from './postModel'; 

const commentSchema = new Schema(
    {
        commentedUserId:{
            type:String,
            required:true
        },
        postId:{
            type:Schema.Types.ObjectId,
            ref:Post,
            required:true
        },
        comment:{
            type:String,
            required:true
        },
        liked:[],
        reply:[]
    },
    {timestamps:true}
)
const Comment = model("Comments",commentSchema)
export default Comment
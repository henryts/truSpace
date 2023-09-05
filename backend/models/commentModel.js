import mongoose from "mongoose";


const commentSchema = new mongoose.Schema(
    {
        commentedUserId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        commentedUserPhoto:{
            type: String,
            default: "../public/assets/default.png",
        },
        commentedUserName:{
            type: String,
            
        },
        postId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post",
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
const Comment = mongoose.model("Comments",commentSchema)
export default Comment
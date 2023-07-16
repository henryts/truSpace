import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    mobile: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "active"
    },
    profilePic: {
        type: String,
        default: null
    }

},{
    timestamps:true
})

const user = mongoose.model('Users', userSchema);

export default user;
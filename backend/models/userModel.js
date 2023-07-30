import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    userName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    mobileNumber:{
      type:Number,
      required:true,
      unique:true
    },

    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    mobileVerified:{
      type:Boolean,
      default:false
    },
    emailVerified:{
      type:Boolean,
      default:false
    },
   
    viewedProfile: {
      type:String,
      default:0,
     // required:false,
      unique:false
      
    },
 
   
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserSchema);
export default User;
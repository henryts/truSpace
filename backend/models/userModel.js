import mongoose from "mongoose";
import validator from 'validator';
import bcrypt from "bcrypt";
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
    //  required:[true,'Please enter an email'],
    //  lowercase: true,
    //  max: 50,
    //  unique: true,
      // validate:[validator.isEmail,'please enter a valid email']
    },
    password: {
      type: String,
    //  required: [true,'please enter a password'],
   //   minlength:8,
     // select:false
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
 
// UserSchema.pre('save',async function(next){
//   if(!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password,12);
//   this.confirmPassword = undefined;
//   next();
// });

// UserSchema.methods.comparePasswordInDb = async function(pswd,pswdDb)
// {
  
//   return await bcrypt.compare(pswd,pswdDb); 

// }


const User = mongoose.model("users", UserSchema);
export default User;
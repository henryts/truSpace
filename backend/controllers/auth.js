import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//import User from "../models/userModel.js";
import user from "../models/userModel.js";

export  const 
signup = async (req, res) => {
  const {
    firstName,
    lastName,
    userName,
    mobileNumber,
    email,
    password,
  } = req.body;
      
      const emailExist = await user.findOne({ email: email });
      const mobileExist = await user.findOne({ mobileNumber: mobileNumber });
  
      if (emailExist || mobileExist) {
        res.status(200).send({
          success: false,
          message: "Email or Phone already exists",
        });
      } 
      
      else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new user({
          firstName,
          lastName,
          userName,
          mobileNumber,
           email,
          password:hashedPassword 
          
        });
         console.log(newUser);
        await newUser.save();
        res.status(200).send({
          success:true,
          message:'Regitered successfully'
        })
      }
    }


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    console.log("in login route:",user);
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    console.log({isMatch});
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials."});
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
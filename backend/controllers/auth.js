import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncErrorHandler from "../errors/asyncErrorHandler.js";
import user from "../models/userModel.js";

export  const signup =asyncErrorHandler( async (req, res,next) => {
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
    });


export const login = asyncErrorHandler( async (req, res,next) => {
 
    const { email, password } = req.body;
    console.log(req.body);
    const userdet = await user.findOne({ email: email });
    
    if (!userdet) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, userdet.password);
  
    if (!isMatch) return  res.status(400).send({
      success: false,
      message: "Invalid credentials",
    });
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete userdet.password;
    //res.status(200).json({ token, userdet });
      res.status(200).send({
          userInfo:userdet,
          success: true,
          message: "Logged in successfully",
          accessToken: token
        });
  // } catch (err) {
  //   res.status(500).json({ error: err.message });
  }
);
import argon2 from 'argon2';
import jwt from "jsonwebtoken";
import asyncErrorHandler from "../errors/asyncErrorHandler.js";
import user from "../models/userModel.js";
import CustomError from "../errors/customError.js";
import cloudinary from "../config/cloudinary.js";


const signToken=id=>{
  return jwt.sign({id},process.env.JWT_SECRET,{
    expiresIn:process.env.LOGIN_EXPIRES
  })
}

export  const signup =asyncErrorHandler( async (req, res,next) => {

  const {
    firstName,
    lastName,
    userName,
    mobileNumber, 
    email,
    password,
    picturePath
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
       // const salt = await bcrypt.genSalt(12);
       const hashedPassword =  await argon2.hash(password);
        const newUser = new user({
          firstName,
          lastName,
          userName,
          mobileNumber,
           email,
         picturePath,
          password:hashedPassword 
          
        });
        try{
  
        await newUser.save();
        }catch(error)
        {
          console.log(error);
        }
        res.status(200).send({
            success:true,
          message:'Regitered successfully'
        })
      }
    });


// export const login = asyncErrorHandler( async (req, res,next) => {
 
//     const { email, password } = req.body;
//     const userdet = await user.findOne({ email: email });
    
//     if (!userdet) return res.status(400).json({ msg: "User does not exist. " });

//     const isMatch = await bcrypt.compare(password, userdet.password);
  
//     if (!isMatch) return  res.status(400).send({
//       success: false,
//       message: "Invalid credentials",
//     });
    
//     const token = jwt.sign({ id: userdet._id }, process.env.JWT_SECRET);
//     delete userdet.password;
//     //res.status(200).json({ token, userdet });
//       res.status(200).send({
//           userInfo:userdet,
//           success: true,
//           message: "Logged in successfully",
//           accessToken: token
//         });
//   // } catch (err) {
//   //   res.status(500).json({ error: err.message });
//   }
// );

export const login = asyncErrorHandler( async (req, res,next) => {
   
  const { email, password } = req.body;
  console.log(req.body, "login");

  var userdet = await user.findOne({ email: email });
 
  console.log(await argon2.verify(userdet.password, password), "result");
  console.log(userdet);
  if (!userdet || !(await argon2.verify(userdet.password, password))) {
    const error = new CustomError("Incorrect email or Password", 400);
    return next(error);
  }
  const token = signToken(userdet._id);
  console.log({token});
  console.log({ token }, "Token");
  res.status(200).json({
    status: "success",
    token,
    userdet,
  });
  
});
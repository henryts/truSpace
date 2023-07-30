// import postMessage from "../models/postMessage.js"
// import user from "../models/userModel.js";
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';


// export  const signup = async (req, res) => {
//   const {
//     firstName,
//     lastName,
//     userName,
//     mobileNumber,
//     email,
//     password,
//   } = req.body;
//      const payload =req.body
//       console.log("data recieved",payload);
//       // res.status(200).send({
//       //   success:true,
//       //   message:'Regitered successfully'
//       // })
//       const emailExist = await user.findOne({ email: email });
//       const mobileExist = await user.findOne({ mobile: mobile });
  
//       if (emailExist || mobileExist) {
//         res.status(200).send({
//           success: false,
//           message: "Email or Phone already exists",
//         });
//       } 
      
//       else {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);
//         const newUser = new user({
//           firstName,
//           lastName,
//           userName,
//           mobileNumber,
//            email,
//           password:hashedPassword 
          
//         });
//          console.log(newUser);
//         await newUser.save();
//         res.status(200).send({
//           success:true,
//           message:'Regitered successfully'
//         })
//       }
//     }

//   export const  login = async (req, res) => {
//       const { email, password, rememberme } = req.body;
//       console.log(req.body);
//       const User = await user.findOne({ email: email });
//       if (User) {
//         const verifyPassword = await bcrypt.compare(password, User.password);
//         if (verifyPassword) {
//           const userId = User._id;
//           const secret = process.env.JWT_SECRET;
//           const accessToken = jwt.sign({ userId, role: "user" }, secret, {
//             expiresIn: "1d",
//           });
//           res.status(200).send({
//             userInfo:User,
//             success: true,
//             message: "Logged in successfully",
//             accessToken: accessToken
//           });
//         } else {
//           res.status(200).send({
//             success: false,
//             message: "Invalid Password",
//           });
//         }
//       } else {
//         res.status(200).send({
//           success: false,
//           message: "User Not Exists!",
//         });
//       }
//     }

//    // export default signup;
   
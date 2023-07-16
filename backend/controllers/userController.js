import postMessage from "../models/postMessage.js"
import user from "../models/userModel.js";

const signup = async (req, res) => {
     // const { name, email, password, mobile } = req.body;
     const temp =req.body
      console.log("data recieved",temp);
      res.status(200).send({
        success:true,
        message:'Regitered successfully'
      })
    //   const emailExist = await user.findOne({ email: email });
    //   const mobileExist = await user.findOne({ mobile: mobile });
  
    //   if (emailExist || mobileExist) {
    //     res.status(400).send({
    //       success: false,
    //       message: "Email or Phone already exists",
    //     });
    //   } else {
    //     const salt = await bcrypt.genSalt(10);
    //     const hashedPassword = await bcrypt.hash(password, salt);
    //     const newUser = new user({
    //       name,
    //       email,
    //       password: hashedPassword,
    //       mobile,
    //     });
  
    //     await newUser.save();
    //     res.status(200).send({
    //       success:true,
    //       message:'Regitered successfully'
    //     })
    //   }
    }

    export default signup;
import postMessage from "../models/postMessage.js"

module.exports = {
    Signup: async (req, res) => {
      const { name, email, password, mobile } = req.body;
      const emailExist = await userSchema.user.findOne({ email: email });
      const mobileExist = await userSchema.user.findOne({ mobile: mobile });
  
      if (emailExist || mobileExist) {
        res.status(400).send({
          success: false,
          message: "Email or Phone already exists",
        });
      } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userSchema.user({
          name,
          email,
          password: hashedPassword,
          mobile,
        });
  
        await newUser.save();
        res.status(200).send({
          success:true,
          message:'Regitered successfully'
        })
      }
    }}
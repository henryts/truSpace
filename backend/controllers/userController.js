import User from "../models/userModel.js";
import asyncErrorHandler from "../errors/asyncErrorHandler.js";



export const updateProfilePhoto = asyncErrorHandler(async(req,res)=>{
    
 
  console.log("inside update photo");
     console.log(req.file);
     let file = req.file;
     let body = req.body;
     console.log({file});
     console.log({body});
     const cloudinaryUrl = req.file?.path;
     const userId = req.body.userId; // Replace with the actual user ID
      User.findByIdAndUpdate(
    userId,
    { $set: { profilePhoto: cloudinaryUrl } },
    { new: true }, // Return the updated document
    (err, updatedUser) => {
     if (err) {
       console.error(err);
      // Handle the error
    } else {
      console.log('Profile photo updated:', updatedUser);
      res.status(201).json({ data: updatedUser });
    }
  }
);



})





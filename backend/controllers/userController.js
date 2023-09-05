import User from "../models/userModel.js";
import asyncErrorHandler from "../errors/asyncErrorHandler.js";

export const getUserData = asyncErrorHandler(async(req,res)=>{
  const id=req.body.id;
  console.log({id});
  const userData= await User.findOne(id);
  console.log({userData});
  res.status(201).json({ data: userData });

})

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

export const updateCoverPhoto = asyncErrorHandler(async(req,res)=>{
 
     const cloudinaryUrl = req.file?.path;
     const userId = req.body.userId; // Replace with the actual user ID
      User.findByIdAndUpdate(
    userId,
    { $set: { coverPhoto: cloudinaryUrl } },
    { new: true }, // Return the updated document
    (err, updatedUser) => {
     if (err) {
       console.error(err);
      // Handle the error
    } else {
      console.log('cover photo updated:', updatedUser);
      res.status(201).json({ data: updatedUser });
    }
  }
);
});
import express from "express";
import { login, signup } from "../controllers/authController.js";
import { updateProfilePhoto,updateCoverPhoto,getUserData } from "../controllers/userController.js";
 import { uploadprofile, profilePhoto,coverPhoto } from "../config/multer.js";


const router = express.Router();

router.put("/updateProfilePhoto",profilePhoto, updateProfilePhoto);
router.put("/updateCoverPhoto",coverPhoto, updateCoverPhoto);
router.get("/getUserData", getUserData);
//router.post("/signup",profilePhoto, signup);

export default router;
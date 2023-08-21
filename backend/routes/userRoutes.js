import express from "express";
import { login, signup } from "../controllers/authController.js";
import { updateProfilePhoto } from "../controllers/userController.js";
 import { uploadprofile, profilePhoto } from "../config/multer.js";


const router = express.Router();

router.put("/updateProfilePhoto",profilePhoto, updateProfilePhoto);

//router.post("/signup",profilePhoto, signup);

export default router;
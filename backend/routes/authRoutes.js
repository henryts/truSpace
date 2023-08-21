import express from "express";
import { login, signup } from "../controllers/authController.js";
 import { uploadprofile, profilePhoto } from "../config/multer.js";


const router = express.Router();

router.post("/login", login);

router.post("/signup",profilePhoto, signup);

export default router;
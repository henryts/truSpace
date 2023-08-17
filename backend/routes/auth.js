import express from "express";
import { login, signup } from "../controllers/authController.js";
 import { uploadprofile } from "../config/multer.js";

const router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

export default router;
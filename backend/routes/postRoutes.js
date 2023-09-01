import express from "express";
import {createPost, getFeedPosts, getUserPosts, likeUnlikePost} from "../controllers/postController.js";
import { verifyToken } from "../middleware/auth.js";
import { protect } from "../middleware/auth.js";
import { upload } from "../index.js";
import { uploadprofile } from "../config/multer.js";
import { addComment } from "../controllers/postController.js";


const router = express.Router();

router.post("/newPost",uploadprofile,createPost); //protect,
/* READ */

router.get("/feed", getFeedPosts);
router.patch("/:id/likeUnlike", likeUnlikePost);
router.patch("/:id/addComment", addComment);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
// router.patch("/:id/like", verifyToken, likePost);

export default router;
import express from "express";
import {createPost, getFeedPosts, getUserPosts, likeUnlikePost} from "../controllers/postController.js";
import { verifyToken } from "../middleware/auth.js";
import { protect } from "../middleware/auth.js";
import { upload } from "../index.js";
import { uploadprofile } from "../config/multer.js";
import { addComment } from "../controllers/postController.js";
import { getComments } from "../controllers/postController.js";
import { savePost } from "../controllers/postController.js";

const router = express.Router();

router.post("/newPost",uploadprofile,createPost); //protect,
/* READ */

router.get("/feed", getFeedPosts);
router.patch("/:id/likeUnlike", likeUnlikePost);
router.patch("/:id/addComment", addComment);
router.get("/:id/getComments", getComments);

router.get("/:userId/posts", verifyToken, getUserPosts);

router.post("/savePost",savePost);


export default router;
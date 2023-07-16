import express from 'express';
//import {getPost,createPost} from '../controllers/post.js'

import  *  as controller from '../controllers/post.js';


const router = express.Router();

router.get('/',controller.getPost);

router.post('/post',controller.createPost);
export default router;
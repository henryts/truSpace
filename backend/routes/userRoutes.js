import express from 'express';
//import  *  as controller from '../controllers/userController.js'
import signup from '../controllers/userController.js';

const router = express.Router();

router.post('/signup',signup);

//router.post('/post',controller.createPost);
export default router;

import express from 'express';
import  *  as controller from '../controllers/userController.js';


const router = express.Router();

router.get('/signup',controller.getPost);

router.post('/post',controller.createPost);
export default router;
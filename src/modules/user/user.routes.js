

import express from 'express';
import { signin, signup, verifyemail } from './user.controller.js';


const userRouter = express.Router();

userRouter.post('/signin',signin)
userRouter.get('/verify/:token',verifyemail)
userRouter.post('/signup',signup)
 

export default userRouter;
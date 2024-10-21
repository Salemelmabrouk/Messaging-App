

import express from 'express';

import { addMessage, getUserMessage } from './message.controller.js';



const messageRouter = express.Router();

messageRouter.post('/',addMessage)
messageRouter.get('/',getUserMessage)
 

export default messageRouter;
import express from 'express';
import { createReply } from '../controllers/Reply';

const replyRouter = express.Router();
replyRouter.post('/create', createReply);

export default replyRouter;
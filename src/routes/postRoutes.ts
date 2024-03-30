import express from 'express';
import { createPost } from '../controllers/Post';

const postRouter = express.Router();
postRouter.post('/create', createPost);

export default postRouter;
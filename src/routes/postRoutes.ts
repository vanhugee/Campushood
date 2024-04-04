import express from 'express';
import { createPost, getAllPosts } from '../controllers/Post';

const postRouter = express.Router();
postRouter.post('/create', createPost);
postRouter.get('/getAll', getAllPosts);

export default postRouter;
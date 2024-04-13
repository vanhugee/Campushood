import express from 'express';
import { createPost, getAllPosts, getPostReplies } from '../controllers/Post';

const postRouter = express.Router();
postRouter.post('/create', createPost);
postRouter.get('/getAll', getAllPosts);
postRouter.get('/getReplies', getPostReplies);


export default postRouter;
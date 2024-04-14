import express from 'express';
import { createPost, 
         getAllPosts, 
         getPostReplies,
         updatePost } from '../controllers/Post';

const postRouter = express.Router();
postRouter.post('/create', createPost);
postRouter.get('/getAll', getAllPosts);
postRouter.get('/getReplies', getPostReplies);
postRouter.put('/update', updatePost);

export default postRouter;
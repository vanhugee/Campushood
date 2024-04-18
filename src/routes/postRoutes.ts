import express from 'express';
import { createPost, 
         getAllPosts, 
         getPostReplies,
         updatePost,
         deletePost } from '../controllers/Post';

const postRouter = express.Router();
postRouter.post('/create', createPost);
postRouter.get('/getAll', getAllPosts);
postRouter.get('/getReplies', getPostReplies);
postRouter.put('/update', updatePost);
postRouter.delete('/delete', deletePost);

export default postRouter;
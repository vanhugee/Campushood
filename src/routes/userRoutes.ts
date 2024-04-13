import express from 'express';
import { createUser, 
         getUser,
         getUserPosts,
         updateUserPoints } from '../controllers/User';

const userRouter = express.Router();
userRouter.post('/create', createUser);
userRouter.get('/get', getUser);
userRouter.get('/getPosts', getUserPosts);
userRouter.put('/update', updateUserPoints);

export default userRouter;

import express from 'express';
import {createUser, 
        getUser,
        updateUserPoints } from '../controllers/User';

const userRouter = express.Router();
userRouter.post('/create', createUser);
userRouter.get('/get', getUser);
userRouter.put('/update', updateUserPoints);

export default userRouter;

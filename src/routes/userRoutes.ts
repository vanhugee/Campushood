import express from 'express';
import {createUser, getUser } from '../controllers/User';

const userRouter = express.Router();
userRouter.post('/create', createUser);
userRouter.get('/get', getUser);

export default userRouter;

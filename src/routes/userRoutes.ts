import express from 'express';
const userRouter = express.Router();
import { createUser } from '../controllers/User';

userRouter.post('/create', createUser);

export default userRouter;

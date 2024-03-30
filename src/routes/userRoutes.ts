import express from 'express';
import { createUser } from '../controllers/User';

const userRouter = express.Router();
userRouter.post('/create', createUser);

export default userRouter;

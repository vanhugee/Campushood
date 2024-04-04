import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRoutes';
import postRouter from './routes/postRoutes';
import replyRouter from './routes/replyRoutes';
import { start } from 'repl';

// Set up the express app
const app = express();
app.use(express.json());
app.use(cors());

// Set up routes
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/reply', replyRouter);

const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    if (error instanceof Error) {
    console.error(`Error occurred: ${error.message}`);
    } else {
      console.error('An unknown error occurred');
    }
  }
}

startServer();
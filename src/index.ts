import express from 'express';
import cors from 'cors';
import { createUser } from './controllers/User';
import { createPost } from './controllers/Post';
import { start } from 'repl';

// Set up the express app
const app = express();
app.use(express.json());
app.use(cors());

// Set up routes
app.use('/user', createUser);
app.use('/post', createPost);

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
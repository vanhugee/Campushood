import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import { Server } from "socket.io";

// Configure io with Server from socket.io
const io = new Server(process.env.SOCKET_IO_PORT, {
    cors: {
        origin: [process.env.CLIENT_URL],
        credentials: true
    }
});

// Get a log when a connection is built from clients.
io.on('connection', (socket) => {
    console.log('A user connected');
});
// Get environment variables
dotenv.config()

// Create the express server and configure it to use json
const app = express();
app.use(express.json());

// Configure cors policy
app.use(cors())

// Set up a API call with GET method
app.get('/data', (req, res) => {
  // Return some sample data as the response
  res.json({
    message: 'Hello, world!'
  });
});

// Start the server on port configured in .env (recommend port 8000)
app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING AT PORT ${process.env.PORT}`);
});

app.post('/post', async (req, res) => {
    try {
        const newPost = {
            /* post data */
        };

        // Save the newPost to your database
        io.emit('new_post', newPost);
        // After newPost saved to database, send the response
        res.json({
            message: 'New Post Created Successfully!'
        });
    } catch (e) {
        res.json({
            message: 'New Post Created Failed!'
        });
    }
});
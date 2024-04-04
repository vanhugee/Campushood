import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import { Server } from "socket.io";

dotenv.config()

const app = express();
app.use(express.json());

app.use(cors())

const io = new Server(process.env.SOCKET_IO_PORT, {
    cors: {
        origin: [process.env.CLIENT_URL],
        credentials: true
    }
});

io.on('connection', (socket) => {
    console.log('A user connected');
});

app.post('/post', async (req, res) => {
    try {
        const newPost = {
            /* post data */
        };

        // Save the newPost to your database

        io.emit('new_post', newPost);

        res.json({
            message: 'New Post Created Successfully!'
        });
    } catch (e) {
        res.json({
            message: 'New Post Created Failed!'
        });
    }
});

app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING AT PORT ${process.env.PORT}`);
});
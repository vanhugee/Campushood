import prisma from '../config/client';
import { Request, Response } from 'express';

// Create a new post
const createPost = async (req: Request, res: Response) => {
    try {
        const {title, content, userId} = req.body;
        const newPost = await prisma.post.create({
            data: {
                title: title,
                content: content,
                userId: userId
            }
        });
        res.status(201).json({message: "Post created successfully", data: newPost});
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } 
        else {
            res.status(400).json({ error: "An unknown error occurred" });
        };
    }
};

export {createPost};
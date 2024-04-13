import prisma from '../config/client';
import { Request, Response } from 'express';

// Create a new reply
const createReply = async (req: Request, res: Response) => {
    try {
        const {content, userId, postId} = req.body;
        const newReply = await prisma.reply.create({
            data: {
                content: content,
                userId: userId,
                postId: postId
            }
        });
        res.status(201).json({message: "Reply created successfully", data: newReply});
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } 
        else {
            res.status(400).json({ error: "An unknown error occurred" });
        };
    }
};

export { createReply };
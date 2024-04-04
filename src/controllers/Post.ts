import prisma from '../config/client';
import { Request, Response } from 'express';

// Create a new post
const createPost = async (req: Request, res: Response) => {
    try {
        const {title, content, userId} = req.body;
        //console.log(title, content, userId)
        const newPost = await prisma.post.create({
            data: {
                title: title,
                content: content,
                user: { connect: { id: userId } }
            }
        });

        await prisma.user.update({
            where: { id: userId },
            data: { posts: { connect: { id: newPost.id } } }
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
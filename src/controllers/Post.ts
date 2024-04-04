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

//Get all posts of a user
const getAllPosts = async (req: Request, res: Response) => {
    try {
        const userId = req.body.userId;
        const posts = await prisma.post.findMany({
            where: {
                userId: userId
            }
        });
        res.status(200).json({message: "All posts fetched successfully", data: posts});
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } 
        else {
            res.status(400).json({ error: "An unknown error occurred" });
        };
    }
}

export {createPost,
        getAllPosts};
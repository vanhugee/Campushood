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

//Get all posts - in descending order of creation
const getAllPosts = async (req: Request, res: Response) => {
    try {
        const posts = await prisma.post.findMany({
            orderBy: {
                createdAt: 'desc'
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

// Get all replies of a post
const getPostReplies = async (req: Request, res: Response) => {
    try {
        const postId = req.body.postId;
        const replies = await prisma.reply.findMany({
            where: {
                postId: postId
            }
        });
        res.status(200).json({message: "All replies fetched successfully", data: replies});
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
        getAllPosts,
        getPostReplies};
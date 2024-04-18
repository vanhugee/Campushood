import prisma from '../config/client';
import { Request, Response } from 'express';
import { formatTime } from '../utils/formatTime';

// Create a new post
const createPost = async (req: Request, res: Response) => {
    try {
        const {title, content, userId, tag} = req.body;
        const newPost = await prisma.post.create({
            data: {
                title: title,
                content: content,
                userId: userId,
                tags: tag
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
        let postTag = req.query.postTag as string || undefined;
        if (postTag === "ALL") {
            postTag = undefined;
        }
        const posts = await prisma.post.findMany({
            where: {
                tags: postTag
            },
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                user: true,
                replies: {
                  include: {
                    user: true
                  }
                }
              }
        });
        let timeArray = [];
        for (let i = 0; i < posts.length; i++) {
            let timeDiff = formatTime(posts[i].createdAt);
            timeArray.push(timeDiff);
        }
        console.log(posts);
        res.status(200).json({message: "All posts fetched successfully", data: {posts, timeArray}});
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

// Update a post
const updatePost = async (req: Request, res: Response) => {
    try {
        const {postId, title, content, tag} = req.body;
        const updatedPost = await prisma.post.update({
            where: {
                id: postId
            },
            data: {
                title: title,
                content: content,
                tags: tag
            }
        });
        res.status(201).json({message: "Post updated successfully", data: updatedPost});
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } 
        else {
            res.status(400).json({ error: "An unknown error occurred" });
        };
    }
}

export { createPost, 
        getAllPosts,
        getPostReplies,
        updatePost };
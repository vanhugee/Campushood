import prisma from '../config/client';
import { Request, Response } from 'express';


// Create a new user
const createUser = async (req: Request, res: Response) => {
    try {
        const {email, name } = req.body;
        const newUser = await prisma.user.create({
            data: {
                email: email,
                name: name
            },
        });
        res.status(201).json({message: "User created successfully", data: newUser});
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message })
        } 
        else {
            res.status(400).json({ error: "An unknown error occurred" })
        };
    }
};


export {createUser};
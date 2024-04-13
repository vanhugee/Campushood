import prisma from '../config/client';
import { Request, Response } from 'express';


// Create a new user
const createUser = async (req: Request, res: Response) => {
    try {
        const {email, name } = req.body;
        const newUser = await prisma.user.upsert({
            where: {
              email: email,
            },
            update: {},
            create: {
              email: email,
              name: name
            },
          }) 
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

// Get info of a user
const getUser = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    console.log(email);
    const userInfo = await prisma.user.findUnique({
    where: {
      email: email,
        },
      });
    res.status(201).json({message: "User info fetched successfully", data: userInfo});
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message })
    } 
    else {
      res.status(400).json({ error: "An unknown error occurred" })
    };
  }
}

// Update user points
const updateUserPoints = async (req: Request, res: Response) => {
  try {
    const {email, points} = req.body;
    const updatedUser = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        points: {
          increment: points,
        },
      },
    });
    res.status(201).json({message: "User points updated successfully", data: updatedUser});
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message })
    } 
    else {
      res.status(400).json({ error: "An unknown error occurred" })
    };
  }
}


export {createUser, getUser, updateUserPoints};
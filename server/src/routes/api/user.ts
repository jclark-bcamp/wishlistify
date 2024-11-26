import express from 'express';
import type { Request, Response } from 'express';
import { User } from '../../models/index.js';
import { getNewToken } from '../../helpers/index.js';

const router = express.Router();

// POST /users - Create a new user
router.post('/', async (req: Request, res: Response) => {
  const { userName, email, userPassword } = req.body;
  try {
    const newUser = await User.create({ userName, email, userPassword });
    const token = getNewToken(userName);
    res.status(201).json({ ...newUser, token });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export { router as userRouter };
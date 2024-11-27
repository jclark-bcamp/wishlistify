import express from 'express';
import type { Request, Response } from 'express';
import { User } from '../../models/index.js';
import { Gift } from '../../models/gift.js';
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

// Get /users - Get all users
router.get('/', async (_: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(201).json(users);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// GET /users/:id/gifts - Get gift by userId
router.get('/:id/gifts', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userGifts = await User.findByPk(id, {
      include: [{ model: Gift }],
      attributes: { exclude: ['userPassword', 'createdAt', 'updatedAt'] }
    });

    if(userGifts) {
      res.json(userGifts);
    } else {
      res.status(404).json({
        message: 'User gifts not found'
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

export { router as userRouter };
import express from 'express';
import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../models/index.js';
import { Gift } from '../../models/gift.js';
import { getNewToken } from '../../helpers/index.js';

const router = express.Router();

// POST /users - Create a new user
router.post('/', async (req: Request, res: Response) => {
  const { userName, email, userPassword } = req.body;
  try {
    const newUser = await User.create({ userName, email, userPassword });
    const token = getNewToken(email, newUser.id);
    res.status(201).json({ ...newUser, token });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// POST /users - Create a new user
router.post('/login', async (req: Request, res: Response) => {
  const { email, userPassword } = req.body;

  const user = await User.findOne({
    where: { email },
  });
console.log("USER", user);
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const passwordIsValid = await bcrypt.compare(userPassword, user.userPassword);

  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  const token = getNewToken(email, user.id);
  return res.json({ token });
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

    if (userGifts) {
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
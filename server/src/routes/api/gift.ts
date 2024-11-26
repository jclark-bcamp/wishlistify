import express from 'express';
import type { Request, Response } from 'express';
import { Gift } from '../../models/gift.js';

const router = express.Router();

// GET /gifts - Get all gifts
router.get('/', async (_req: Request, res: Response) => {
  try {
    const gift = await Gift.findAll();
    res.json(gift);
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

// GET /gifts/:id - Get gift by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const gift = await Gift.findByPk(id);
    if(gift) {
      res.json(gift);
    } else {
      res.status(404).json({
        message: 'Gift not found'
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

// POST /gifts - Create a new gift
router.post('/', async (req: Request, res: Response) => {
  const { giftName, giftPrice, userId } = req.body;
  try {
    const newgift = await Gift.create({
      giftName,
      giftPrice,
      userId
    });
    res.status(201).json(newgift);
  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
});

// PUT /gifts/:id - Update a gift by ID
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { giftName } = req.body;
  try {
    const gift = await Gift.findByPk(id);
    if(gift) {
      gift.giftName = giftName;
      await gift.save();
      res.json(gift);
    } else {
      res.status(404).json({
        message: 'gift not found'
      });
    }
  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
});

// DELETE /gifts/:id - Delete a gift by ID
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const gift = await Gift.findByPk(id);
    if(gift) {
      await gift.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({
        message: 'User not found'
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

export { router as giftRouter };

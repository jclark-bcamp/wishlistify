import { Router } from 'express';
import { giftRouter } from './gift.js';
import { userRouter } from './user.js';

const router = Router();

router.use('/gifts', giftRouter);
router.use('/users', userRouter);

export default router;

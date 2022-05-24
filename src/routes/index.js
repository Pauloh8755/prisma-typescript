import { Router } from 'express';
import userRouter from './user.js';

const router = Router();

router.get('/healths', (req, res)=> res.status(200).json({status : 'UP'}));
router.use('/user', userRouter);

export default router;
import { Router } from 'express';
import { UserController } from '../controllers/user.js'
const router = Router();

router.post('/', async (req,res)=>UserController.create(req, res));


export default router;
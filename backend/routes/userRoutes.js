import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  getUsers,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(getUsers);
router.post('/login', authUser);

export default router;

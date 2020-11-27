import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  getUsers,
  getUserInfo,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(getUsers);
router.route('/profile').get(protect, getUserInfo);
router.post('/login', authUser);

export default router;

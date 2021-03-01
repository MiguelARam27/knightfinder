import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  getUsers,
  getUserInfo,
  forgotPassword,
  resetPassword,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(getUsers);
router.route('/profile').get(protect, getUserInfo);
router.post('/login', authUser);
router.route('/forgotpassword').post(forgotPassword);
router.route('/reset/:resettoken').put(resetPassword);

export default router;

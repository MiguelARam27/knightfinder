import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware.js';
import { userProfile } from '../controllers/profileController.js';

router.route('/').post(protect, userProfile);
export default router;

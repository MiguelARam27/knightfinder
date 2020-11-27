import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware.js';
import {
  userProfile,
  userProfiles,
  userProfileInfo,
  userProfileClubs,
} from '../controllers/profileController.js';

router.route('/').post(protect, userProfile).get(protect, userProfiles);
router.route('/clubs').post(protect, userProfileClubs);
router.route('/:id').get(protect, userProfileInfo);
export default router;

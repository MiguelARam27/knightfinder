import express from 'express';
const router = express.Router();
import { protect } from '../middleware/authMiddleware.js';
import {
  userProfile,
  userProfiles,
  userProfileInfo,
  userProfileClubs,
  userProfileClubsUpdate,
  addFriend,
  removeFriend,
} from '../controllers/profileController.js';

router.route('/').post(protect, userProfile).get(protect, userProfiles);
router
  .route('/clubs')
  .post(protect, userProfileClubs)
  .put(protect, userProfileClubsUpdate);
router
  .route('/friends/:id')
  .post(protect, addFriend)
  .delete(protect, removeFriend);
router.route('/:id').get(protect, userProfileInfo);
export default router;

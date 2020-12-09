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
  getFriends,
} from '../controllers/profileController.js';

router.route('/').post(protect, userProfile).get(protect, userProfileInfo);
router
  .route('/clubs')
  .post(protect, userProfileClubs)
  .put(protect, userProfileClubsUpdate);
router
  .route('/friends/:id')
  .post(protect, addFriend)
  .delete(protect, removeFriend);
router.route('/friends').get(protect, getFriends);

router.route('/profiles').get(protect, userProfiles);
export default router;

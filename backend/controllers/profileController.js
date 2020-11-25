import asyncHandler from 'express-async-handler';

import User from '../models/userModel.js';
import Profile from '../models/ProfileModel.js';

//@ desc POST user profile info
//@route GET /api/profile
//access public
const userProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { gradYear, major } = req.body;

    const profileFields = {
      gradYear,
      major,
    };

    let profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { $set: profileFields },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    return res.json(profile);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
export { userProfile };

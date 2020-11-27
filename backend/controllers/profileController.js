import asyncHandler from 'express-async-handler';

import User from '../models/userModel.js';
import Profile from '../models/ProfileModel.js';

//@desc POST user profile info
//@route POST /api/profile
//access private
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

//@desc POST user profile info
//@route POST /api/profile/clubs
//access private
const userProfileClubs = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { clubName, timeAttended } = req.body;
    const clubInfo = {
      clubName,
      timeAttended,
    };

    let profile = await Profile.findOne({ user });
    profile.clubs.unshift(clubInfo);
    await profile.save();

    return res.json(profile);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

//@desc GET user profiles
//@route GET /api/profile
//access private
const userProfiles = asyncHandler(async (req, res) => {
  const profiles = await Profile.find();

  if (profiles) {
    res.json(profiles);
  } else {
    res.status(404);
    throw new Error('profiles not found');
  }
});

//@desc GET one user profile
//@route GET /api/profile/:id
//access private
const userProfileInfo = asyncHandler(async (req, res) => {
  const profile = await Profile.findById(req.params.id);

  if (profile) {
    res.json(profile);
  } else {
    res.status(404);
    throw new Error('profile not found');
  }
});

export { userProfile, userProfiles, userProfileInfo, userProfileClubs };

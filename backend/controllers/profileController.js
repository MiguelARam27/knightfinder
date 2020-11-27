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

//@desc POST user profile club info
//@route POST /api/profile/clubs
//access private
const userProfileClubs = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const data = req.body;
    let profile = await Profile.findOne({ user });
    data.map((club) => {
      let clubInfo = {
        clubName: club.clubName,
        timeAttended: club.timeAttended,
      };
      profile.clubs.unshift(clubInfo);
    });
    await profile.save();

    return res.json(profile);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

//@desc PUT user profile club info
//@route PUT /api/profile/clubs
//access private
const userProfileClubsUpdate = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const data = req.body;
    // let profile = await Profile.findOne({ user });
    let updatedClubFields = [];
    data.map((club) => {
      let clubInfo = {
        clubName: club.clubName,
        timeAttended: club.timeAttended,
      };
      updatedClubFields.push(clubInfo);
    });
    console.log(updatedClubFields);
    let profile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { clubs: updatedClubFields },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    return res.json(profile);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

//@desc GET all profiles
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

//@desc Post one friend to profile
//@route POST /api/profile/friends/:id
//access private
const addFriend = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const profile = await Profile.findById(req.params.id);

  if (profile && user) {
    let updatedProfile = await Profile.findOneAndUpdate(
      { user: req.user._id },
      { friends: req.params.id },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.json(updatedProfile);
  } else {
    res.status(404);
    throw new Error('not found');
  }
});

export {
  userProfile,
  userProfiles,
  userProfileInfo,
  userProfileClubs,
  userProfileClubsUpdate,
  addFriend,
};

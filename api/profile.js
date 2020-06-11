const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../models/Profile');
//@route POST api/profile
//desc create a profile or update for a user
//acess private
router.post(
  '/',
  [
    auth,
    [
      check('gradYear', 'gradYear is required').not().isEmpty(),
      check('major', 'major is required').not().isEmpty(),
      check('clubs', 'clubs is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { gradYear, major, clubs } = req.body;

    const profileFields = {};
    profileFields.user = req.user.id;
    if (gradYear) profileFields.gradYear = gradYear;
    if (major) profileFields.major = major;
    if (clubs) profileFields.clubs = clubs;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      //if there is already a profile for this user. updated it.
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }

      //create a profile
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);

module.exports = router;

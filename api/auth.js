const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

// @route GET api/auth
// @desc GET user info that is logged in
// @access private route

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route Post api/auth
//desc login  a user
//acess public
router.post(
  '/',
  [
    check('email', 'email is required').isEmail(),
    check(
      'password',
      'please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check if the user already exists
    const { email, password } = req.body;

    try {
      //see if user already exists
      let user = await User.findOne({ email: email });

      if (!user)
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

      //return jsonwebtoken so user can automatically log in
      const payload = {
        user: {
          id: user.id,
        },
      };

      // TODO fix the time to 30 minutes for jwt
      jwt.sign(
        payload,
        config.get('jwtsecret'),
        { expiresIn: 999999 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;

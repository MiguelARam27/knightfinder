const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../backend/models/User');

//@route Post api/users
//desc register a user
//acess public
router.post(
  '/',
  [
    check('name', 'name is required').not().isEmpty(),
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
    const { email, password, name } = req.body;

    try {
      //see if user already exists
      let user = await User.findOne({ email: email });
      if (user) {
        res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }

      //new instance of user
      user = new User({
        email,
        password,
        name,
      });

      //encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      //save user
      await user.save();

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

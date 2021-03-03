import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/UserModel.js';
import Profile from '../models/ProfileModel.js';
import crypto from 'crypto';
import sendEmail from '../utils/sendEmail.js';
import jwt from 'jsonwebtoken';

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    // res.json({
    //   _id: user._id,
    //   email: user.email,
    //   token: generateToken(user._id),
    // });
    sendTokenResponse(user, 200, res);
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,

      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

//@ desc Get all users
//@route GET /api/users
//access public
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

//@ desc Get user info
//@route GET /api/users/profile
//access public
const getUserInfo = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  const profile = await Profile.findOne({ user: req.user._id });

  if (user && profile) {
    res.json({
      user,
      profile,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
//Desc Forgot password
//@route POST /api/users/forgotpassword
//@access public
const forgotPassword = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    //get user token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetUrl = `${req.protocol}://${req.get(
      'host'
    )}/api/users/reset/${resetToken}`;

    const message = `you are recieving this message to reset your password, copy and paste the following code into the reset password page \n\n reset your password ${resetToken}`;

    try {
      await sendEmail({
        email: user.email,
        subject: 'password reset token',
        message,
      });

      res.json({ success: true, data: 'email sent' });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save({ validateBeforeSave: false });
      res.status(500);
      console.log(error);
      throw new Error('Email could not be sent');
    }
  } else {
    res.status(401);
    throw new Error('No user found with that email');
  }
});
//desc reset Password
//@route PUT /api/users/forgotpassword/:resettoken
//@access public
const resetPassword = asyncHandler(async (req, res) => {
  console.log(req.params.resettoken);
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.resettoken)
    .digest('hex');

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  console.log(user);
  if (user) {
    //set new pasword
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.json(user);
  } else {
    res.status(401);
    throw new Error('invalid token');
  }
});

//Get token from model, create cookie and send response

const sendTokenResponse = (user, statusCode, res) => {
  //Create token
  const token = generateToken(user._id);
  const options = {
    maxAge: 30 * 1000 * 60,
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res.status(statusCode).cookie('token', token, options).json({
    success: true,
    token,
  });
};

export {
  authUser,
  registerUser,
  getUsers,
  getUserInfo,
  resetPassword,
  forgotPassword,
};

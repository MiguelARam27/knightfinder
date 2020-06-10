const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gradYear: {
    type: Number,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  clubs: [
    {
      type: Object,
      clubName: {
        type: String,
        required: true,
      },
      timeAttended: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = User = mongoose.model('User', UserSchema);

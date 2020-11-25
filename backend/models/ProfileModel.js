import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
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

const Profile = mongoose.model('Profile', ProfileSchema);

export default Profile;

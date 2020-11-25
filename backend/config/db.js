import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      // Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
      // by default, you need to set it to false.
    });

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.brightCyan.underline
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;

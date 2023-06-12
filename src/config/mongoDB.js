import mongoose from 'mongoose';

export const mongoConnect = async () => {
  try {
    const con = await mongoose.connect(
      'mongodb://localhost:27017/fullStackNTD'
    );
    con
      ? console.log('Connected to MongoDB')
      : console.log('Unable to connect to MongoDB');
  } catch (error) {
    console.log(error);
  }
};

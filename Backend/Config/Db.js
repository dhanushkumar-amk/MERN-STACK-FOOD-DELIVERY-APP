import mongoose from 'mongoose';export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://dhanushkumaramk:dhanushkumaramk@cluster0.mlv70zv.mongodb.net/food-del'
    )
    .then(() => console.log('DB connected'));
};

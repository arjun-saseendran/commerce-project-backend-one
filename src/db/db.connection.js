import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  await mongoose
    .connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log("MongoDB connection error ", error));
};

export default connectDB;

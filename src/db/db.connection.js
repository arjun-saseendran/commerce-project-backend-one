import mongoose from "mongoose";
import { DB_NAME } from "../constants";

export const connectDB = async () => {
  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
};

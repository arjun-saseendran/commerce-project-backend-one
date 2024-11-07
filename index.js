import { app } from "./src/app.js";
import dotenv from "dotenv";
import connectDB from "./db/db.connection.js";

dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log("MongoDB connection error ", error));

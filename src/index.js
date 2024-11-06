import app from "./app.js";
import dotev from "dotenv";
import { connectDB } from "./db/db.connection.js";

dotev.config({ path: "./.env" });
const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(() => console.log("MongoDB connection error ", error));

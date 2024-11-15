import { app } from "./src/app.js";
import dotenv from "dotenv";
import connectDB from "./src/db/db.connection.js";
dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: [
      process.env.CORS,
      "http://localhost:5173",
      "http://127.0.0.1:5173",
    ],
    credentials: true,
  })
);

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log("MongoDB connection error ", error));

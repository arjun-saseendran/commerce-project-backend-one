import { app } from "./src/app.js";
import dotenv from "dotenv";
import connectDB from "./src/db/db.connection.js";
import cors from "cors";

dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 3000;
const corsOptions = {
  origin: process.env.CORS || "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log("MongoDB connection error ", error));

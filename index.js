import { app } from "./src/app.js";
import dotenv from "dotenv";
import connectDB from "./src/db/db.connection.js";
dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 3000;
import cors from "cors";

const corsOptions = {
  origin: [process.env.CORS, "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
};

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    app.use(cors(corsOptions));
  })
  .catch((error) => console.log("MongoDB connection error ", error));

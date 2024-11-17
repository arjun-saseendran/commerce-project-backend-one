import dotenv from "dotenv";
import connectDB from "./db/db.connection.js";
import express from "express";
import ProductRouter from "./routes/product.routes.js";
import UserRouter from "./routes/user.routes.js";
import CartRouter from "./routes/cart.routes.js";
import cors from "cors";

dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 3000;
const app = express();


app.use(
  cors({
    origin: [
      process.env.CORS,
      "http://localhost:5173",
      "http://127.0.0.1:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log("MongoDB connection error ", error));

  app.use(express.json());
  app.use(express.static("src/public"));

  // routes
  app.use("/product", ProductRouter);
  app.use("/user", UserRouter);
  app.use("/cart", CartRouter);

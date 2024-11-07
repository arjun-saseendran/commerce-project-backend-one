import express from "express";
import ProductRouter from "./routes/product.routes.js";
import UserRouter from "./routes/user.routes.js";
import cors from "cors";
const app = express();

export const corsOptions = {
  origin: process.env.CORS || "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// routes
app.use("/product", ProductRouter);
app.use("/user", UserRouter);

export { app };

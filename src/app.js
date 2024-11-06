import express from "express";
import ProductRouter from "./routes/product.routes.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config({ path: "./.env" });
const corsOptions = {
  origin: process.env.CORS,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// routes
app.use("/product", ProductRouter);

export { app };

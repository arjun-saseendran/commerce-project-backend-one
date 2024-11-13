import express from "express";
import ProductRouter from "./routes/product.routes.js";
import UserRouter from "./routes/user.routes.js";
import CartRouter from "./routes/cart.routes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: [process.env.CORS, "http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());

// routes
app.use("/product", ProductRouter);
app.use("/user", UserRouter);
app.use("/cart", CartRouter);

export { app };

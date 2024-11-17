import express from "express";
import ProductRouter from "./routes/product.routes.js";
import UserRouter from "./routes/user.routes.js";
import CartRouter from "./routes/cart.routes.js";
import AdminRouter from './routes/admin.routes.js'
import cors from "cors";

const app = express();

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

app.use(express.json());
app.use(express.static('src/public'))

// routes
app.use("/product", ProductRouter);
app.use("/user", UserRouter);
app.use("/cart", CartRouter);
app.use('/admin', AdminRouter)

export { app };

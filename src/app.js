import express from "express";
import ProductRouter from "./routes/product.routes.js";
import UserRouter from "./routes/user.routes.js";
import cors from "cors";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

// routes
app.use("/product", ProductRouter);
app.use("/user", UserRouter);

export { app };

import express from "express";
import ProductRouter from "./routes/product.routes.js";
import UserRouter from "./routes/user.routes.js";
import CartRouter from "./routes/cart.routes.js";
import cors from "cors";

const app = express();

const whitelist = [process.env.CORS, "http://localhost:5173"];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(express.json());
app.use(cors(corsOptions));

// routes
app.use("/product", ProductRouter);
app.use("/user", UserRouter);
app.use("/cart", CartRouter);

export { app };

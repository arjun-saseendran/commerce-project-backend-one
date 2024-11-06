import express from "express";
import ProductRouter from('./routes/product.routes.js')
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.CORS,
    credentials: true
}))


// routes
app.use('./product', ProductRouter)


export { app };

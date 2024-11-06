import express from "express";
import { renderProducts } from "../controllers/product.controllers";

const router = express.Router();

router.get("/", renderProducts);

export default router;

import express from "express";
import {
  addProduct,
  renderProducts,
} from "../controllers/product.controllers.js";

const router = express.Router();

router.get("/", renderProducts);
router.post("/", addProduct);

export default router;

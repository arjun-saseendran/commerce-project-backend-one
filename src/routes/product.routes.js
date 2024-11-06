import express from "express";
import {
  addProduct,
  renderProducts,
  viewProductDetails,
} from "../controllers/product.controllers.js";

const router = express.Router();

router.get("/", renderProducts);
router.post("/", addProduct);
router.get("/details/:id", viewProductDetails);

export default router;

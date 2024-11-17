import express from "express";
import {
  renderProducts,
  viewProductDetails,
} from "../controllers/product.controllers.js";

const router = express.Router();

router.get("/", renderProducts);
router.get("/details/:id", viewProductDetails);

export default router;

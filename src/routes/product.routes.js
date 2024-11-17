import express from "express";
import {
  addProduct,
  renderProducts,
  viewProductDetails,
} from "../controllers/product.controllers.js";
import {authAdmin} from '../middlewares/auth.middlewares.js'

const router = express.Router();

router.get("/", renderProducts);
router.post("/", authAdmin, addProduct);
router.get("/details/:id", viewProductDetails);

export default router;

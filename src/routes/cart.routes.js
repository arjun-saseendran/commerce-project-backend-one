import express from "express";
import { renderCartItems, addToCart, updateCartQuantity } from "../controllers/cart.controllers.js";
import { authUser } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.get("/", authUser, renderCartItems);
router.post("/", authUser, addToCart);
router.post("/update-quantity", authUser, updateCartQuantity);

export default router;

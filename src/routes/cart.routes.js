import express from "express";
import { renderCartItems, addToCart } from "../controllers/cart.controllers.js";
import { authUser } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.get("/", renderCartItems);
router.post("/", authUser, addToCart);

export default router;

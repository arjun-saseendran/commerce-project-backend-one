import express from "express";
import { renderItems, addToCart } from "../controllers/cart.controllers.js";
import authUser from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.get("/", renderItems);
router.post("/", authUser, addToCart);

export default router;

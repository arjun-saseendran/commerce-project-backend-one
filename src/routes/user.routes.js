import express from "express";
import { login, signup } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

export default router;

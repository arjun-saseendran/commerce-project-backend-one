import express from "express";
import { signup, login, getTokenFromRefreshToken } from "../controllers/user.controllers.js";
import {authUser} from '../middlewares/auth.middlewares.js'

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/get-access-token", authUser, getTokenFromRefreshToken)


export default router;

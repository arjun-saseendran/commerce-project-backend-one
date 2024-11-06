import express from "express";
import { signup } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/singup", signup);

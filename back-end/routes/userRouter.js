import express from "express";
import {
  createUser,
  getProfile,
  loginByEmail,
} from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginByEmail);
router.get("/me", authMiddleware, getProfile);

export default router;

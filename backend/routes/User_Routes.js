import express from "express";
import { register, login } from "../controllers/User_Controller.js";
import { authMiddlware } from "../middlewares/Auth_Middleware.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;

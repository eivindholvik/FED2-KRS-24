import { Router } from "express";
import { login } from "../controllers/authController.js";

const router = Router();

router.post("/login", login);
// router.post("/register", (req, res) => {
//   res.send("register");
// });

export default router;
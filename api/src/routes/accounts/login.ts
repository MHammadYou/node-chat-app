import { Router } from "express";
import { loginUser } from "controllers/accounts/login";

const router = Router();

router.post("/login", loginUser);

export default router;

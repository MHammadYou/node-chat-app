import { Router } from "express";
import { createUser } from "controllers/accounts/signup";

const router = Router();

router.post("/signup", createUser);

export default router;

import { Router } from "express";

import signupRouter from "./signup";

const router = Router();

router.use("/", signupRouter);

export default router;

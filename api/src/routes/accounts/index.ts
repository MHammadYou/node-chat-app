import { Router } from "express";

import signupRouter from "./signup";
import loginRouter from "./login";

const router = Router();

router.use("/", signupRouter);
router.use("/", loginRouter);

export default router;

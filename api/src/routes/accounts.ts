import { Router } from "express";

import { ApiEndpoints } from "@lib/index";

import { auth } from "middlewares/auth";
import { createUser, loginUser, getUserDetails } from "controllers/accounts";

const router = Router();

router.post(ApiEndpoints.signup(), createUser);
router.post(ApiEndpoints.login(), loginUser);
router.get(ApiEndpoints.userDetails(), auth, getUserDetails);

export default router;

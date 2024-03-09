import { Router } from "express";

import { ApiEndpoints } from "@lib/index";

import { createUser, loginUser } from "controllers/accounts";

const router = Router();

router.post(ApiEndpoints.signup(), createUser);
router.post(ApiEndpoints.login(), loginUser);

export default router;

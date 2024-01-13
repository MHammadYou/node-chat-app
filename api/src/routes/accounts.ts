import { Router } from "express";

import { API_ENDPOINTS } from "@lib/constants/api-endpoints";

import { createUser, loginUser } from "controllers/accounts";

const router = Router();

router.post(API_ENDPOINTS.signup, createUser);
router.post(API_ENDPOINTS.login, loginUser);

export default router;

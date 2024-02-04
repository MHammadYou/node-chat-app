import { Router } from "express";

import { API_ENDPOINTS } from "@lib/constants/api-endpoints";

import { createMessage } from "controllers/messages";
import { auth } from "middlewares/auth";

const router = Router();

router.post(API_ENDPOINTS.createMessage, auth, createMessage);

export default router;

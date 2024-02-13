import { Router } from "express";

import { API_ENDPOINTS } from "@lib/constants/api-endpoints";

import { auth } from "middlewares/auth";
import { getChat } from "controllers/chat";

const router = Router();

router.get(API_ENDPOINTS.chat, auth, getChat);

export default router;

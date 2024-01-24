import { Router } from "express";

import { API_ENDPOINTS } from "@lib/constants/api-endpoints";

import { getChat } from "controllers/chat";

const router = Router();

router.get(API_ENDPOINTS.chat, getChat);

export default router;

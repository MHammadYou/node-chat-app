import { Router } from "express";

import { API_ENDPOINTS } from "@lib/index";

import { auth } from "middlewares/auth";
import { getChat, getChats } from "controllers/chat";

const router = Router();

router.get(API_ENDPOINTS.chat, auth, getChat);
router.get(API_ENDPOINTS.chats, auth, getChats);

export default router;

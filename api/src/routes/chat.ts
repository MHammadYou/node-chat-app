import { Router } from "express";

import { ApiEndpoints } from "@lib/index";

import { auth } from "middlewares/auth";
import { getChat, getChats } from "controllers/chat";

const router = Router();

router.get(ApiEndpoints.chat(":id"), auth, getChat);
router.get(ApiEndpoints.chats(), auth, getChats);

export default router;

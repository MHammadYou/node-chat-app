import { Router } from "express";

import { API_ENDPOINTS } from "@lib/constants/api-endpoints";

import { createMessage } from "controllers/messages";

const router = Router();

router.post(API_ENDPOINTS.createMessage, createMessage);

export default router;

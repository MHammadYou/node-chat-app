import { Request, Response } from "express";

import { ChatResponse } from "@lib/api/chat/types";
import { ApiError } from "@lib/api/types";

import { findPopulatedChat } from "models/chats";

export const getChat = async (
  req: Request,
  res: Response<ChatResponse | ApiError>
) => {
  try {
    const chat = await findPopulatedChat();
    res.status(200).json(chat);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: 404,
      message: "Failed to fetch chat",
    });
  }
};

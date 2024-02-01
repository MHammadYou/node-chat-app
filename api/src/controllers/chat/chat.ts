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

    if (!chat) throw new Error("Can't find chat");

    res.status(200).json(chat);
  } catch (error) {
    const [message, status] =
      error instanceof Error
        ? [error.message, 404]
        : ["Something went wrong", 500];

    res.status(404).json({
      status,
      message,
    });
  }
};

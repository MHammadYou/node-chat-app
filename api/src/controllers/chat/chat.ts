import { Request, Response } from "express";

import { ChatResponse, ApiError } from "@lib/index";

import { findPopulatedChatById } from "models/chats";

export const getChat = async (
  req: Request,
  res: Response<ChatResponse | ApiError>
) => {
  try {
    const { id } = req.params;
    const chat = await findPopulatedChatById(id);

    if (!chat) throw new Error("Can't find chat");

    res.status(200).json(chat);
  } catch (error) {
    const [message, status] =
      error instanceof Error
        ? [error.message, 404]
        : ["Something went wrong", 500];

    res.status(status).json({
      status,
      message,
    });
  }
};

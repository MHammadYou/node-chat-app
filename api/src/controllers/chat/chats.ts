import { Request, Response } from "express";

import Chats from "models/chats";

import { ChatListResponse, ApiError, Message } from "@lib/api";

export const getChats = async (
  req: Request,
  res: Response<ChatListResponse | ApiError>
) => {
  // TODO: Update to include only specific user chats
  try {
    const chats = await Chats.find();

    const response = chats.map(({ _id, name, isGroup, messages }) => ({
      id: _id,
      name,
      isGroup,
      lastMessage: messages[messages.length - 1],
    }));

    res.send(response);
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Something went wrong",
    });
  }
};

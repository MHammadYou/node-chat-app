import { Request, Response } from "express";

import { findPopulatedChatsList } from "models/response/chats";

import { ChatListResponse, ApiError } from "@lib/api";

export const getChats = async (
  req: Request,
  res: Response<ChatListResponse | ApiError>
) => {
  // TODO: Update to include only specific user chats
  try {
    const response = await findPopulatedChatsList();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Something went wrong",
    });
  }
};

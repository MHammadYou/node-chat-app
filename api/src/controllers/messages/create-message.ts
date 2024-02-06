import { Request, Response } from "express";

import { CreateMessagePayload } from "@lib/api/chat/types";
import { ApiError } from "@lib/api/types";

import { createMessage as createMessageObject } from "models/messages";

export const createMessage = async (
  req: Request<{}, {}, CreateMessagePayload>,
  res: Response<{} | ApiError>
) => {
  const { text, chatId } = req.body;
  try {
    const message = await createMessageObject(text, req.userId, chatId);
    if (message instanceof Error) {
      throw message;
    }
    res.status(201).json({});
  } catch (error) {
    const [message, status] =
      error instanceof Error
        ? [error.message, 401]
        : ["Something went wrong", 500];
    const response: ApiError = {
      status,
      message,
    };
    res.status(status).json(response);
  }
};

import { Request, Response } from "express";

import { findPopulatedChat } from "models/chats";

export const getChat = async (req: Request, res: Response) => {
  try {
    const chat = await findPopulatedChat();
    res.status(200).json(chat);
  } catch (error) {
    console.log(error);
    res.send("Somthing went wrong");
  }
};

import { Request, Response } from "express";

import { findChat } from "models/chats";

export const getChat = async (req: Request, res: Response) => {
  try {
    const chat = await findChat();
    res.status(200).json(chat);
  } catch (error) {
    console.log(error);
    res.send("Somthing went wrong");
  }
};

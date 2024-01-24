import { Request, Response } from "express";

import Conversations from "models/conversations";

export const getChat = async (req: Request, res: Response) => {
  try {
    const chats = await Conversations.find();
    const chat = chats?.[0];

    res.status(200).json(chat);
  } catch (error) {
    console.log(error);
    res.send("Somthing went wrong");
  }
};

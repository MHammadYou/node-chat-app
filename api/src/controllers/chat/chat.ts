import { Request, Response } from "express";

import Chats from "models/chats";

export const getChat = async (req: Request, res: Response) => {
  try {
    const chats = await Chats.find();
    const chat = chats?.[0];

    res.status(200).json(chat);
  } catch (error) {
    console.log(error);
    res.send("Somthing went wrong");
  }
};

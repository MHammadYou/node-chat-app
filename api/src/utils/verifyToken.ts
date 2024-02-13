import { Schema } from "mongoose";
import { verify, JwtPayload } from "jsonwebtoken";

import { SECRET_KEY } from "constants/settings";

export const verifyToken = (token?: string): Promise<Schema.Types.ObjectId> => {
  return new Promise((resolve, reject) => {
    try {
      if (!token) throw new Error("Authentication token missing");
      const decoded = verify(token, SECRET_KEY);
      const userId = (decoded as JwtPayload).id;

      if (!userId) throw new Error("Invalid authentication token");
      resolve(userId);
    } catch (error: any) {
      reject(error.message);
    }
  });
};

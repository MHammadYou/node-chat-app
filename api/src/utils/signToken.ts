import { sign } from "jsonwebtoken";

import { SECRET_KEY, TOKEN_EXPIRE_IN } from "constants/settings";

export const signToken = (id: string, expiresIn: string = TOKEN_EXPIRE_IN) =>
  sign({ id }, SECRET_KEY, { expiresIn });

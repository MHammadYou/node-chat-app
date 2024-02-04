import { Schema, Document, model } from "mongoose";

export type UsersDocument = Document & {
  username: string;
  email: string;
  password: string;
  chats: Schema.Types.ObjectId[];
};

const usersSchema = new Schema<UsersDocument>({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  chats: [{ type: Schema.Types.ObjectId, ref: "Chats" }],
});

const Users = model<UsersDocument>("Users", usersSchema);

export const isExistingUserId = async (
  id: string | Schema.Types.ObjectId
): Promise<boolean> => {
  return !!(await Users.findById(id));
};

export const isExistingEmail = async (email: string): Promise<boolean> => {
  return (await findUserByEmail(email)) ? true : false;
};

export const isExsitingUsername = async (
  username: string
): Promise<boolean> => {
  return (await Users.findOne({ username })) ? true : false;
};

export const findUserByEmail = async (
  email: string
): Promise<UsersDocument | null> => {
  return await Users.findOne({ email });
};

export default Users;

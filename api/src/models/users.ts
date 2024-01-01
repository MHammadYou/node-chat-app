import { Schema, Document, model } from "mongoose";

interface UsersInterface extends Document {
  username: string;
  email: string;
  password: string;
  // TODO: Add later
  // picture: string
}

const usersSchema = new Schema<UsersInterface>({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
});

const Users = model<UsersInterface>("Users", usersSchema);

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
): Promise<UsersInterface | null> => {
  return await Users.findOne({ email });
};

export default Users;

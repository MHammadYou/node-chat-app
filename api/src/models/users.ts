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

export default Users;

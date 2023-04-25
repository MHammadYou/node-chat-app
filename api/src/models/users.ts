import mongoose from "mongoose";

const Schema = mongoose.Schema;


interface UsersInterface {
  username: string,
  email: string,
  password: string,
  // TODO: Add later
  // picture: string
}


const usersSchema = new Schema<UsersInterface>({
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true }
});


const Users = mongoose.model<UsersInterface>('Users', usersSchema);

export default Users;
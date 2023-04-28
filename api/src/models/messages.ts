import { Schema, Document, model } from "mongoose";


interface MessagesInterface extends Document {
    body: string,
    conversation: Schema.Types.ObjectId,
    user: Schema.Types.ObjectId
}
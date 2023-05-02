import { Document, Schema } from "mongoose";


interface ConversationsInterface extends Document {
    messages: Schema.Types.ObjectId;
    users: Schema.Types.ObjectId;
}
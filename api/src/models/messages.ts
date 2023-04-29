import { Schema, Document, model } from "mongoose";


interface MessagesInterface extends Document {
    body: string,
    user: Schema.Types.ObjectId,
    conversation: Schema.Types.ObjectId
}


const Messages = new Schema<MessagesInterface>({
    body: String,
    user: { type: Schema.Types.ObjectId, ref: 'Users'},
    conversation: { type: Schema.Types.ObjectId, ref: 'Conversations' }
})
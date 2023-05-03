import { Document, Schema, model } from "mongoose";


interface ConversationsInterface extends Document {
    messages: Schema.Types.ObjectId;
    users: Schema.Types.ObjectId;
}


const ConversationsSchema = new Schema<ConversationsInterface>({
    messages: { type: Schema.Types.ObjectId, ref: 'Messages'},
    users: { type: Schema.Types.ObjectId, ref: 'Users'}
});


const Conversations = model<ConversationsInterface>('Conversations', ConversationsSchema);


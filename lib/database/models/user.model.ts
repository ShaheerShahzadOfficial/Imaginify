import { Document, Schema, model, models } from "mongoose";


export interface IUser extends Document {
    clerkId: string;
    firstName?: string;
    lastName?: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    creditBalance?: number;
    photo: string;
    planId?: number;
    username: string;
}


const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, required: true, default: Date.now() },
    updatedAt: { type: Date, required: true, default: Date.now() },
    creditBalance: { type: Number, default: 20 },
    photo: { type: String, required: true },
    planId: { type: Number, default: 1 },
    username: { type: String, required: true, unique: true },
});

const User = models.User || model("User", UserSchema);

export default User
import mongoose from "mongoose";
import { PasswordService } from "../services/password";

export interface User {
    id?: string;
    email: string;
    password: string;
}


interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: User): UserDoc;
}

type UserDoc = mongoose.Document & User;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    toJSON: {
        transform(doc, ret) {
            return {
                id: ret._id,
                email: ret.email
            }
        },
    }
})

userSchema.pre('save',async function (next) {
    if (this.isModified('password')) {
        const hashedPass = await PasswordService.toHash(this.get('password'));
        this.set('password', hashedPass)
    }

    next();
})

userSchema.statics.build = (attrs: User) => {
    return new UserModel(attrs);
};

export const UserModel = mongoose.model<UserDoc, UserModel>('User', userSchema);

import mongoose from "mongoose";
import { usersSchema } from "./users.schema.js";

const User = mongoose.model('User', usersSchema);

export class UsersRepository {

    async createUser(name, email) {
        try{
            const newUser = new User({ name, email });
            await newUser.save();
            return newUser;
        }catch(err) {
            console.log(err);
        }
    }
}
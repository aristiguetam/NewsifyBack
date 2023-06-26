import mongoose, { Schema, model, Model } from "mongoose";
import { IUser } from "../interface";

const UserSchema = new Schema({
    name     : { type: String, required: true },
    email    : { type: String, required: true, unique: true },
    password : { type: String, required: true },
    role     : {
        type : String,
        enum : {
            values  : ['admin', 'client'],
            message : '{VALUE} is not supported',
            default : 'client',
            required: true,
        }
    }
},
    {
        timestamps: true,
    }
)

const User : Model<IUser> = mongoose.models.User || model('User', UserSchema);

export default User;
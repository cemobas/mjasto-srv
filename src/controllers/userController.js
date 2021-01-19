import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';

const User = mongoose.model('User', UserSchema);

export const getUserWithId = (req, res) => {
    User.findOne({ nickname: req.params.nickname }, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}

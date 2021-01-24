const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nickname: {
        type: String,
        required: 'Enter a nickname for the author'
    },
    name: {
        type: String,
        required: 'Enter name'
    },
    surname: {
        type: String,
        required: 'Enter surname'
    },
    shortBio: {
        type: String,
        required: 'Enter a short biography'
    },
    twitter: {
        type: String,
        required: 'Enter twitter link'
    },
    facebook: {
        type: String,
        required: 'Enter facebook link'
    },
    instagram: {
        type: String,
        required: 'Enter instagram link'
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

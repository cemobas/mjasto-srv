import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EventSchema = new Schema({
    id: {
        type: String,
        required: 'Enter id'
    },
    user: {
        type: String,
        required: 'Enter a user'
    },
    eventId: {
        type: String
    },
    venueId: {
        type: String
    },
    cap: {
        type: Number
    },
    price: new Schema({
      price: Number,
      currency: String
    }),
    short: {
        type: String,
        required: 'Enter the short explanation'
    },
    description: {
        type: String,
        required: 'Enter the description'
    },
    tags: {
        type: Array
    },
    date: {
        type: Date,
        required: 'Enter when it is posted'
    }
});

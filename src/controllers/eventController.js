import mongoose from 'mongoose';
import { EventSchema } from '../models/eventModel';

const Event = mongoose.model('Event', EventSchema);

export const addNewEvent = (req, res) => {
    let newEvent = new Event(req.body);

    newEvent.save((err, event) => {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
};

export const getEvents = (req, res) => {
    Event.find({}, (err, events) => {
        if (err) {
            res.send(err);
        }
        res.json(events);
    });
};

export const getLatestEvents = (req, res) => {
    Event.find({}, [], { skip: parseInt(req.params.skip), limit: parseInt(req.params.limit), sort: { date: -1 } }, (err, events) => {
        if (err) {
            res.send(err);
        }
        res.json(events);
    });
};

export const getEventWithId = (req, res) => {
    Event.findOne({ index: req.params.eventId }, (err, event) => {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
}

export const updateEvent = (req, res) => {
    /** "new: true" means you want the new (updated) data in the response (not the old data) */
    Event.findOneAndUpdate({ index: req.params.eventId }, req.body, { new: true }, (err, event) => {
        if (err) {
            res.send(err);
        }
        res.json(event);
    })
}

export const deleteEvent = (req, res) => {
    Event.remove({ index: req.params.eventId }, (err, event) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted event' });
    })
}

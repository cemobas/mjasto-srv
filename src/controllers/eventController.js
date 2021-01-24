const mongoose = require('mongoose');
const Event = require('../models/eventModel');

const addNewEvent = (req, res) => {
    const newEvent = new Event(req.body);

    newEvent.save((err, event) => {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
};

const getEvents = (req, res) => {
    Event.find({}, (err, events) => {
        if (err) {
            res.send(err);
        }
        res.json(events);
    });
};

const getLatestEvents = (req, res) => {
    Event.find({}, [], { skip: parseInt(req.params.skip), limit: parseInt(req.params.limit), sort: { date: -1 } }, (err, events) => {
        if (err) {
            res.send(err);
        }
        res.json(events);
    });
};

const getEventWithId = (req, res) => {
    Event.findOne({ index: req.params.eventId }, (err, event) => {
        if (err) {
            res.send(err);
        }
        res.json(event);
    });
}

const updateEvent = (req, res) => {
    /** "new: true" means you want the new (updated) data in the response (not the old data) */
    Event.findOneAndUpdate({ index: req.params.eventId }, req.body, { new: true }, (err, event) => {
        if (err) {
            res.send(err);
        }
        res.json(event);
    })
}

const deleteEvent = (req, res) => {
    Event.remove({ index: req.params.eventId }, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted event' });
    })
}

module.exports = {addNewEvent, getEvents, getLatestEvents, getEventWithId, updateEvent, deleteEvent}

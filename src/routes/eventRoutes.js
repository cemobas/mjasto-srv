import { getEvents, getLatestEvents, getEventWithId /** addNewEvent, updateEvent, deleteEvent */ } from '../controllers/eventController';

/** Injecting app object, because we're going to use routes function in order to pass the endpoints created here. */
const routes = (app) => {
    app.route('/events')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl} | type: ${req.method}`);
            next();
        }, getEvents)
        //.post(addNewEvent);

    app.route('/latestEvents/:skip/:limit')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl} |  type: ${req.method}`);
            next();
        }, getLatestEvents)

    app.route('/events/:eventId')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl} |  type: ${req.method}`);
            next(); // without next, GET url can only be 'events?eventId=xyz', but this way we can call it as 'events/xyz'
        }, getEventWithId) // get specific event
        //.put(updateEvent) // put request
        //.delete(deleteEvent);
}

export default routes; // es6 syntax. no way to use it without export.

import { getUserWithId } from '../controllers/userController';

/** Injecting app object, because we're going to use routes function in order to pass the endpoints created here. */
const routes = (app) => {
    app.route('/users/:nickname')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl} |  type: ${req.method}`);
            next();
        }, getUserWithId);
}

export default routes; // es6 syntax. no way to use it without export.

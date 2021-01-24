const getUserWithId = require('../controllers/userController')

/** Injecting app object, because we're going to use routes function in order to pass the endpoints created here. */
const routes = (app) => {
    app.route('/users/:nickname')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl} |  type: ${req.method}`);
            next();
        }, getUserWithId);
}

module.exports = routes;

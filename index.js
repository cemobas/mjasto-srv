const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const eventRoutes = require('./src/routes/eventRoutes')
const userRoutes = require('./src/routes/userRoutes')

const app = express();
const PORT = process.env.PORT || 8080;
const MONGO = process.env.MONGODB_URI || 'mongodb://localhost/mjasto';

// mongoose connection
mongoose.Promise = global.Promise; // we make a connection and we don't wait for it.

// define a db that doesn't exist and it will be created automatically with the first POST operation.
mongoose.connect(`${MONGO}`, function(err) {
    if (err) throw err;
});

// bodyparser setup: setting up json to work
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

eventRoutes(app);
userRoutes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    /** `text` instead of 'text', because `` is es6 syntax. This way we can inject a variable like PORT */
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);


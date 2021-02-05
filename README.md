# Mjasto Backend

This is a Node.js and Express rest api to serve charming events in the city you're living in.

## Getting Started

```bash
npm install
npm start
```

The server runs on port 8080.

There are three routes:

- http://localhost:8080/ - homepage
- http://localhost:8080/events - view events
- http://localhost:8080/users - view all users
- http://localhost:8080/venues - view all venues

The service exchanges payloads in JSON.

## Development

This project uses EditorConfig to standardize text editor configuration.
Visit http://editorconfig.org for details.

for a specific file: npm run -s eslint index.js

for the whole codebase: npm run -s eslint .

### Debugging

This project uses https://www.npmjs.com/package/debug for development logging. To start `nodemon` and enable logging:

```bash
npm run debug
```

### Testing

Running the following cmd runs the tests under test folder.

```
npm test
```

mongod instance must have been started as well.

### Database

Data sources are stored in Mongodb. To start mongod instance, run this cmd:

```
sudo mongod --dbpath ~/data/db
```

## FAQ

- Q: Why?
  - A: Because.

## Credits

N/A

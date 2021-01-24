const mongoose = require('mongoose');
const User = require('../models/userModel');

const getUserWithId = (req, res) => {
    User.findOne({ nickname: req.params.nickname }, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}

module.exports = getUserWithId;

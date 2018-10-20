'use strict';

// Modelos
const User = require('../models/userModel');

// Metodos
const getUsers = (req ,res) => { 
    // List users with the Query settings defined on Schema
    User.list()
        .then((entities) => {
            res.json(entities);
        })
        .catch(err => res.status(400).json(err));
};

const getUser = (req ,res) => { 
    const userId = req.query.userId;
    User.get(userId)
        .then((entity) => {
            res.json(entity.plain());
        })
        .catch(err => res.status(400).json(err));
};

const createUser = (req, res) => {
    const params = req.body;

    const entityData = User.sanitize(params);
    const user = new User(entityData);
 
    user.save()
        .then((entity) => {
            res.json(entity.plain());
        })
        .catch((err) => {
            // If there are any validation error on the schema
            // they will be in this error object
            res.status(400).json(err);
        })
};
// Exports
module.exports = {
    getUser,
    getUsers,
    createUser
};
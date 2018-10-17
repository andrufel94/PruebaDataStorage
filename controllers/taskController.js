'use strict';

const Task = require('../models/taskModel');

const getTasks = (req ,res) => { 
    // List users with the Query settings defined on Schema
    Task.list()
        .then((entities) => {
            res.json(entities);
        })
        .catch(err => res.status(400).json(err));
};

const createTask = (req, res) => {
    const params = req.body;
    params.done = (params.done == 'true');

    const entityData = Task.sanitize(params);
    console.log(params);
    const task = new Task(entityData);
 
    task.save()
        .then((entity) => {
            res.json(entity.plain());
        })
        .catch((err) => {
            // If there are any validation error on the schema
            // they will be in this error object
            res.status(400).json(err);
        })
};

module.exports = {
    getTasks,
    createTask
};
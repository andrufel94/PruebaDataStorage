'use strict';

// Modelos
const Task = require('../models/taskModel');
const User = require('../models/userModel');

// Metodos
const getTasks = (req ,res) => { 
    // List users with the Query settings defined on Schema
    Task.list()
        .then(({ entities }) => {
            return Promise.all(entities.map((entity) => (
                User.get(entity.userId)
                .then((entityUser) => {
                    entity.user = entityUser.plain();
                    return entity;
                })
            )))
            .then((entities) => {
                res.json(entities);
            })
        })
        .catch(err => res.status(400).json(err));
};

const getTask = (req ,res) => { 
    const taskId = req.query.taskId;
    Task.get(taskId)
        .then((entity) => {
            res.json(entity.plain());
            return Promise((entity) => { 
                console.log(entity.userId);
                User.get(entity.userId)
                .then((entityUser) => {
                    entity.user = entityUser.plain();
                    resolve(entity);
                })
            }).then((entity) => {
                res.json(entity);
            })
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
            taskSave = entity.plain();
            res.json(taskSave);
        })
        .catch((err) => {
            // If there are any validation error on the schema
            // they will be in this error object
            res.status(400).json(err);
        })
};
// Exports
module.exports = {
    getTask,
    getTasks,
    createTask
};
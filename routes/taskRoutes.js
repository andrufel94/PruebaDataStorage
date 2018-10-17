'use strict';

var express = require('express');
var taskController = require('../controllers/taskController');

var api = express.Router();

api.get('/getTask',taskController.getTasks);
api.post('/createTask',taskController.createTask);

module.exports = api;
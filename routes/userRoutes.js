'use strict';

var express = require('express');
var userController = require('../controllers/userController');

var api = express.Router();

api.get('/getUser',userController.getUser);
api.get('/getUsers',userController.getUsers);
api.post('/createUser',userController.createUser);

module.exports = api;
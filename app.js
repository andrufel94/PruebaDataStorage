'use strict';

var express = require('express');
var bodyParser = require('body-parser')

var app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cargar rutasT
var taskRoutes = require('./routes/taskRoutes');
var userRoutes = require('./routes/userRoutes');

// configurar cabeceras y cors
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// rutas
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

// configurar errores
app.use(function (err, req, res, next) {
    if (err) {
        console.log(err);
        res.status(err.status).send(err.message);
    }
});

module.exports = app;
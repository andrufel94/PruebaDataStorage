'use strict';

var app = require('./app');
var port = 3789;
const gstore = require('gstore-node')();
const Datastore = require('@google-cloud/datastore');

const datastore = new Datastore({
    projectId: 'my-bookshelf-208321',
});

app.listen(port, () => {
    gstore.connect(datastore);
    console.log('El servidor nodeJS esta correindo...');
});
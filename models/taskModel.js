'use strict';

const gstore = require('gstore-node')();
const { Schema } = gstore;

const taskSchema = new Schema({
    description: { type: String, required: true },
    created: { type: Date, required: true },
    done: { type: Boolean, required: true },
    userId: { type: Number, required: true }
});

/**
 * List entities query shortcut
 */
const listSettings = {
    limit: 15,
    order: { property: 'created' }
};
taskSchema.queries('list', listSettings);

// Add a custom method on your Schema
taskSchema.methods.getUser = function getUser() {
    return this.model('User').get(this.userId);
};

module.exports = gstore.model('Task', taskSchema);
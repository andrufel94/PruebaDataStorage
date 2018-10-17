'use strict';

const gstore = require('gstore-node')();
const { Schema } = gstore;

const taskSchema = new Schema({
    description: { type: String, required: true },
    created: { type: Date, required: true },
    done: { type: Boolean, required: true }
});

/**
 * List entities query shortcut
 */
const listSettings = {
    limit: 15,
    order: { property: 'created' }
};
taskSchema.queries('list', listSettings);

module.exports = gstore.model('Task', taskSchema);
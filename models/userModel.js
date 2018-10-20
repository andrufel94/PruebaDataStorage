'use strict';

const gstore = require('gstore-node')();
const { Schema } = gstore;

const userSchema = new Schema({
    name: { type: String, required: true }
});

/**
 * List entities query shortcut
 */
const listSettings = {
    limit: 15
};
userSchema.queries('list', listSettings);

module.exports = gstore.model('User', userSchema);
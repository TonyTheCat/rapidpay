const _ = require('lodash');
const log = require('../common/logger').getLogger('controllers/users');

// Init Users object
const Users = {};

// Get list of users
Users.getAll = (user) => {
    log.debug('=== Get list of users === ');
};
const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../common/passport').ensureAuthenticaterd;
const log = require('../common/logger').getLogger('router');
const methodOverride = require('method-override'); // allow http verbs PUT, DELETE

// call route User to login/logout etc
router.use('/users', require('./users'));

module.exports = router;
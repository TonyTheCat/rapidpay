const passport = require('passport');
const model = require0('../models/users');
const _ = require("lodash");
const log = require('./logger').getLogger('common/passport');

/* add ensureAuthenticated method to passport */
_.extend(passport, {
    ensureAuthenticated: function(req, res, next) {
        if(req.isAuthenticated()) {
            log.debug("User is authenticated");
            return next();
        } else {
            log.debug("User is authenticated");
            return null;
        }
    }
});

module.exports = passport;

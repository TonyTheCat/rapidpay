var passport = require('passport');
var model = require0('../models/users');
var _ = require("lodash");
var log = require('./logger').getLogger('common/passport');

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

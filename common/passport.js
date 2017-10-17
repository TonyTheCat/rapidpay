const passport = require('passport');
const model = require0('../models/users');
const _ = require("lodash");
const log = require('./logger').getLogger('common/passport');

// config simple strategy used by app
passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

// add ensureAuthenticated method to passport
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

const passport = require('passport');
const model = require('../models/users');
const _ = require("lodash");
const log = require('./logger').getLogger('common/passport');
const LocalStrategy = require('passport-local').Strategy;

// config simple strategy used by app
passport.use(new LocalStrategy(
    (username, password, done) => {
        User.findOne({ username: username }, (err, user) => {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });
    }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

// add ensureAuthenticated method to passport
_.extend(passport, {
    ensureAuthenticated: (req, res, next) => {
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

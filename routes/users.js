const express = require('express');
const router = express.Router();
const log = require('../common/logger').getLogger('router/users');
const passport = require("../common/passport");
const errors = require('../common/errors/errors');
const validator = require('../common/validator');
const _ = require("lodash");

// route /users
router.route('/')
    .get((req, res, next) => {
        return controllers.users.getAll(req.user)
            .then( (result) => {res.data = result} );
    });






module.exports = router;
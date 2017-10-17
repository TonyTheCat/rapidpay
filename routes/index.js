const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../common/passport').ensureAuthenticaterd;
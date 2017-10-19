const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const passport = require('./common/passport');
const log = require('./common/logger').getLogger('app');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.json());

// passport aux methods
app.use(passport.initialize());
app.use(passport.session());

// Router
app.use('/', require('./routes/index'));
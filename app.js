const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const passport = require('./common/passport');
const settings = require('./config').settings;
const log = require('./common/logger').getLogger('app');

const app = express();

app.use(bodyParser.json());

// Router
app.use(passport.initialize());
const path = require('path'); //module for working with pathes
const log4js = require('log4js');

// return current working directory (cwd) and set the path for the log4js config
log4js.configure(path.resolve(process.cwd(), 'config/log4js_config.json'), {});

module.exports = log4js;

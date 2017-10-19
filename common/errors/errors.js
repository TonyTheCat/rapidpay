var errors = require('./require_errors');

module.exports = errors(
  require('./lib_errors/errors_common'),      //100XXX, 199XXX
  require('./lib_errors/errors_validate'),    //198XXX
  require('./lib_errors/errors_user')        //218XXX
);

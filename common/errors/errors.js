// @ Copy-Paste from another project
var errors = require('./require_errors');

module.exports = errors(
  require('./lib_errors/errors_common'),  
  require('./lib_errors/errors_validate'),
  require('./lib_errors/errors_user')  
);

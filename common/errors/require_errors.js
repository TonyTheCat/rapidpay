var _ = require('lodash');
var moment = require('moment');

/**
 * Build set of error functions from specified error objects.
 * @returns {Object} - with error functions
 */
module.exports = function() {
  /*
   * Merge all error modules in single place and add common validation and common errors.
   */

  [].push.call(arguments, require('./lib_errors/errors_common'));
  [].push.call(arguments, require('./lib_errors/errors_validate'));
  var errors = _.extend.apply(_, arguments);

  /*
   * Check errors for possible duplicates of 'code' property.
   * Will throw exception with array of found duplicates.
   */
  var errorsArray = _.toArray(errors);
  
  var duplicates = _.difference(errorsArray, _.uniq(errorsArray, 'code'));
  if(duplicates.length) {
    var message = JSON.stringify({
      info: "Look 'duplicates' Array for list of all found duplicates",
      duplicates: duplicates
    });

    throw {
      name: "Duplicated error codes are found in 'errors' module",
      message: message
    };
  }
  /*
   * Make functions with ability to extend default error message
   * (add some new fields or rewrite existed).
   */
  var errorFunctions = {};
  _.forEach(errors, function(value, key) {
      errorFunctions[key] = function(data) {
        data = data ? data : {};
        data.timestamp = moment(new Date()).format('YYYY-MM-DD HH:MM:ss.S');
        return _.extend(value, data);
      };
  });

  return errorFunctions;
};
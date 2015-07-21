var util = require('util');

var TEMPLATE = "require.register('env', function(exports, require, module) { module.exports = %s; });";

var createJsEnvPreprocessor = function(args, config, logger, helper) {
  var log = logger.create('preprocessor.jsenv');

  return function(content, file, done) {
    log.info('Processing "%s".', file.originalPath)
    done(util.format(TEMPLATE, content));
  };
};

module.exports = {
  'preprocessor:jsenv': ['factory', createJsEnvPreprocessor]
};

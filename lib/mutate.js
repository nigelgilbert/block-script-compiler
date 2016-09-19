'use strict';

module.exports = function(string, callback) {
  string += ' Hey man.  I mutated you.';
  callback(null, string);
}
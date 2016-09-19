const functions = [
function (callback) {
  const string = 'This is my file.  It is very long.  Wow.';
  callback(null, string);
},
function (string, callback) {
  string += ' Hey man.  I mutated you.';
  callback(null, string);
},
function (string, callback) {
  console.log(string);
  callback();
}
];

const async = require("async");
module.exports = function() { async.waterfall(functions); };

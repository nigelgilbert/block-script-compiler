'use strict';
/**
1. read in the build.block.js.
2. parse it.
3. write out a js file with it.
*/
const async = require('async');
const fs = require('fs');
const path = require('path');

module.exports.compile = function(target) {
  const blockfile = require(path.join('..', target));
  const functions = parse(blockfile);
  generate(functions, run);
}

function parse(blockfile) {
  const urls = blockfile.map(block => block.logic);
  const functions = urls.map(url => require(path.join('..', url)));
  return functions;
}

function link(blocks) {

}

function generate(functions, callback) {
  const stringified = stringify(functions);
  const ws = fs.createWriteStream(path.join('bin/','build.js'));
  ws.write('const functions = [\n' + stringified + '\n];\n\n');
  ws.write('const async = require("async");\n');
  ws.write('module.exports = function() { async.waterfall(functions); };\n', function() {
    ws.end();
    ws.close(callback);
  });
}

function run() {
  const executable = require(path.join('..', 'bin', 'build.js'));
  executable();
}

function stringify(functions) {
  return functions.map(f => f.toString()).join(',\n');
}
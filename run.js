'use strict';

const path = require('path');
const compiler = require('./compiler/compiler.js');

const TARGET = 'build.blocks.js';
const TARGET_PATH = path.join('bin', TARGET);

compiler.compile(TARGET_PATH);
/**
Algorithm pseudo-code

1. read in the build.block.js
2. parse it to .json
3. map blocks -> # of blocks that use it's output as input
4. link chain:

  push root function onto branch head stack.
  while stack has next branch head:
    while chain has next block:
      if # of output blocks > 1:
        insert a branch into chain
        for each output:
          push output onto branch stack (as a new subchain head)
      else if # output blocks == 1:
        add to chain
        next block
      else # output blocks == 0:
        next branch

5. recurse until stack is empty.  Return:
    chains: map<id,chain>
      - chain: {head: function, chain: array<function>}
      - chains.get(0) is the root chain (program entry)
    branches: map<id,object>
      - .json data used to generate branches in build.js


    NOTE: might be better to store functions and branches by their index in chain array.
6. generate executable
*/
"use strict";

const fs = require('fs');
const path = require('path');

module.exports.compile = function(target) {
  const blockJson = require(path.join('..', target));
  const functions = extractFunctions(blockJson);
  const { chains, branches } = link(blockJson);
  // generateCompiledCode(functions, run);
}

function extractFunctions(blockfile) {
  const urls = blockfile.map(block => block.logic);
  const functions = urls.map(url => require(path.join('..', url)));
  return functions;
}

function link(blockfile) {
  let chains, branches = null;
  chains = createBlockExecutionChains(blockfile);
  return { chains, branches };
}

// Returns a Map of Arrays of functions.
// Each array is a sequence of functions that transform data,
// i.e. the preceeding function pipes it's data to the next.
function createBlockExecutionChains(blockfile) {
  const blockOutputMap = createBlockOutputMap(blockfile);
  const blockStack = [];
  const chains = [];
  // assuming for now that the first function is the root (for simplicity)
  blockStack.push(blockfile[0]);

  const chain = [];
  while (blockStack.length > 0) {
    const block = blockStack.pop();
    const outputs = blockOutputMap.get(block);
    if (outputs.length > 1) {
      chain.push(null); // null will represent a branch
      //
      // TODO: 
      // for each output:
      //     push output onto branch stack (as a new subchain head)
      //
    } else if (outputs.length === 1) {
      chain.push(block);
    } else {

    }
  }
}

// Returns a map which maps a block id to the ids of its outputs.
// TODO: make this map a block id to the actual blocks, not their ids
function createBlockOutputMap(blockfile) {
  const outputstMap = new Map();
  blockfile.forEach(block => {
    if (block.input !== null) {
      const inputFunctionsOutputs = outputsMap.get(block.input);
      if (inputFunctionsOutputs === 'undefiend') {
       inputFunctionsOutputs = []; 
      }
      inputFunctionsOutputs.push(block.id)
      outputsMap.set(block.input, frequency++);
    } 
  });
  return outputsMap;
}
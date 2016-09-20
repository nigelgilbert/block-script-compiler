/**
1. read in the build.block.js
2. parse it to .json
3. map blocks -> # of blocks that use it's output as input
4. link chain:
  push root function onto stack.
  while pop stack:
    if # of output blocks > 1:
      insert a branch into chain
      for each output:
        push child chain onto stack

5. recurse until stack is empty.  Return:
    chains: map<id,chain>
      - chain: {head: function, chain: array<function>}
      - chains.get(0) is the root chain (program entry)
    branches: map<id,object>
      - .json data used to generate branches in build.js
      -
  NOTE: might be better to store functions and branches by their index in chain array.

6. generate executable
*/
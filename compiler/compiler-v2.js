/**
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
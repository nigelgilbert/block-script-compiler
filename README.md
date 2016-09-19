### block-script

```
.
├── src/
├── parser/
├── lib/
│   ├── std/
│   └── ui/
├── custom/
├── dist/
├── build.js
└── build.block.js
```

#### build.block.js
Simple DSL parser output. Readable json format. Serializes UI data so that projects can be rendered in the electron window.  Each json object represents a block.  Links view with logic.

```
{
  position: {
    x: 0,
    y: 0,
    z: 0
  }
  view: 'custom/pipe.js'
  logic: 'lib/io/filepipe.js'
}
```

#### build.js
The functional output of the blockscript file.   Readable javascript file.  Similar to Webpack output, but easier to read.  This is the program file that gets executed.
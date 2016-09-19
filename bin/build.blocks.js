module.exports = [
  {
    id: 0,
    name: 'file reader',
    position: {
      x: 0,
      y: 0
    },
    view: '',
    logic: 'lib/reader.js',
    input: []
  },
  {
    id: 1,
    name: 'string modifier',
    position: {
      x: 0,
      y:0
    },
    view: '',
    logic: 'lib/mutate.js',
    input: [0]
  },
  {
    id: 3,
    name: 'console logger',
    position: {
      x: 0,
      y:0
    },
    view: '',
    logic: 'lib/logger.js',
    input: [1]
  }
];
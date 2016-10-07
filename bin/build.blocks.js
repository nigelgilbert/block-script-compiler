module.exports = [
  {
    id: 0,
    name: 'file reader',
    logic: 'lib/reader.js',
    input: null
  },
  {
    id: 1,
    name: 'string modifier',
    logic: 'lib/mutate.js',
    input: 0
  },
  {
    id: 3,
    name: 'console logger',
    logic: 'lib/logger.js',
    input: 1
  }
];
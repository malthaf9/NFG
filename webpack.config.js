const path = require('path');

module.exports = {
  target: 'node', // This is the important line for handling Node.js modules
  entry: './src/index.js', // Your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Add other configuration options as needed
};

const path = require('path');

module.exports = {
    entry: './src/index.js', // default
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
        // dist/main.js
    }
};

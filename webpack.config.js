const path = require('path');

module.exports = {
    entry: './src/index.js', // default
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
        // dist/main.js
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }

};

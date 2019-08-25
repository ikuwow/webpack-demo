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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.csv$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  }

};

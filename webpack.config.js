const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin([{ from: './public', to: './dist' }]),
    new HtmlWebpackPlugin({
      template: 'wds.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 8000,
  },
  watch: true,
};

// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/client/App.jsx',
  output: {
    path: __dirname + '/public/',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images',
        },
      },
    ]
  },
  // plugins: [new HtmlWebpackPlugin({ template: './client/index.html' })],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  watch: true,
  mode: 'development'
};
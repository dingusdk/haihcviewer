const path = require("path");

module.exports = {
  entry: { index: path.resolve(__dirname, "src", "panel.ts") },
  output: {
    path: path.resolve(__dirname, 'custom_components/ihcviewer/frontend'),
    filename: 'panel.js',
  },
  devtool: 'source-map',
  resolve: { // support reading TypeScript and JavaScript files, 📖 -> https://github.com/TypeStrong/ts-loader
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: [
        "/node_modules/",
        "/homeassistant-frontend/",
      ],
      use: [{
        loader: 'ts-loader',
      }]
    }]
  },
  plugins: [
  ]
};
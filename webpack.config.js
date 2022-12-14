const nodeExternals = require('webpack-node-externals')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=25000',
      },
    ],
  },
  externals: [nodeExternals()],
  target: 'node'
}

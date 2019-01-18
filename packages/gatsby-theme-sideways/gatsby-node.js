const path = require('path')

exports.onCreateWebpackConfig = ({ loaders, plugins, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.dirname(require.resolve('gatsby-theme-sideways')),
          use: [loaders.js()]
        }
      ]
    }
  })
}

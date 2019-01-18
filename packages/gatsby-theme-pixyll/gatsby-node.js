const path = require('path')

exports.onCreateWebpackConfig = ({ loaders, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.dirname(require.resolve('gatsby-theme-pixyll')),
          use: [loaders.js()]
        }
      ]
    }
  })
}

const path = require('path')

module.exports = () => {
  return {
    plugins: [
     {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'data',
          path: 'src/data',
          ignore: ['**/\.*']
        }
      },
      'gatsby-transformer-yaml',
      'gatsby-plugin-meta-redirect'
    ]
  }
}

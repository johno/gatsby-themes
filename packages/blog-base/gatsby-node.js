const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  parent {
                    ... on File {
                      name
                      sourceInstanceName
                    }
                  }
                  frontmatter {
                    redirects
                    path
                  }
                  code {
                    scope
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.allMdx.edges.forEach(({ node }) => {
          const fallbackPath = `/${node.parent.sourceInstanceName}/${node.parent.name}`

          const path = node.frontmatter.path || fallbackPath

          if (node.frontmatter.redirects) {
            node.frontmatter.redirects.forEach(fromPath => {
              createRedirect({
                fromPath,
                toPath: path,
                redirectInBrowser: true,
                isPermanent: true
              })
            })
          }

          createPage({
            path,
            context: node,
            component: require.resolve('./src/components/PostPageLayout.js')
          })
        })
      })
    )
  })
}

exports.onCreateWebpackConfig = ({ loaders, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.dirname(require.resolve('gatsby-theme-sideways')),
          use: [loaders.js()],
        },
      ],
    },
  })
}

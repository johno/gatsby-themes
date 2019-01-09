const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const result = await graphql(`
    {
      mdxPages: allMdx {
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
  `)

  if (result.errors) {
    console.log(result.errors)
    throw new Error('Could not query posts', result.errors)
  }

  console.log(result)

  const { mdxPages } = result.data

  mdxPages.edges.forEach(({ node }) => {
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
}

exports.onCreateWebpackConfig = ({ loaders, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.dirname(require.resolve('gatsby-theme-blog-base')),
          use: [loaders.js()],
        },
      ],
    },
  })
}

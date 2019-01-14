const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const kebab = require('lodash.kebabcase')

exports.createPages = async ({ graphql, actions }, pluginOptions) => {
  const { createPage, createRedirect } = actions

  const { docsPath } = pluginOptions

  return

  const result = await graphql(`
    {
      components: allComponentsMetadata {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.log(result.errors)
    throw new Error('Could not query components', result.errors)
  }

  const { components } = result.data

  // Create post pages and redirects
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
      component: Post
    })
  })
}

exports.onPreBootstrap = ({ store }) => {
  const { program } = store.getState()

  const dirs = [
    path.join(program.directory, 'src/pages')
  ]

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}

exports.onCreateWebpackConfig = ({ loaders, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.dirname(require.resolve('gatsby-theme-docs')),
          use: [loaders.js()]
        }
      ]
    }
  })
}

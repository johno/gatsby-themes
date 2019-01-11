const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const kebab = require('lodash.kebabcase')

const PostListPage = require.resolve('./src/components/PostListPageLayout')
const PostPage = require.resolve('./src/components/PostPageLayout')
const TagPage = require.resolve('./src/components/TagPageLayout')

exports.createPages = async ({ graphql, actions }, pluginOptions) => {
  const { createPage, createRedirect } = actions

  const {
    postsPath = '/blog',
    postsPerPage = 9999
  } = pluginOptions

  const result = await graphql(`
    {
      mdxPages: allMdx(
        sort: {
          fields: [frontmatter___date]
          order: DESC
        }
        filter: {
          frontmatter: {
            draft: { ne: true }
            archived: { ne: true }
          }
        }
      ) {
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
              path
              tags
              redirects
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

  const { mdxPages } = result.data

  // Collect tags
  const allTags = mdxPages.edges.reduce((acc, post) => {
    const { node: { frontmatter = {} } } = post
    return acc.concat(frontmatter.tags || [])
  }, [])
  const tags = [...new Set(allTags)]

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
      component: PostPage
    })
  })

  // Create post list pages
  const posts = mdxPages.edges
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    const limit = postsPerPage
    const skip = i * postsPerPage
    const currentPage = i + 1

    const isFirst = currentPage === 1
    const isLast = currentPage === numPages

    const nextPage = isLast ? null : `${postsPath}/${currentPage + 1}`
    const prevPage = isFirst ? null : `${postsPath}/${
      currentPage - 1 === 1 ? '' : currentPage - 1
    }`

    createPage({
      path: isFirst ? postsPath : `${postsPath}/${currentPage}`,
      component: PostListPage,
      context: {
        limit,
        skip,
        currentPage,
        isFirst,
        isLast,
        nextPage,
        prevPage
      }
    })
  })

  tags.forEach(tag => {
    const path = `/tags/${kebab(tag)}`

    createPage({
      path,
      component: TagPage,
      context: {
        tag
      }
    })
  })
}

exports.onPreBootstrap = ({ store }) => {
  const { program } = store.getState()

  const dirs = [
    path.join(program.directory, 'src/pages'),
    path.join(program.directory, 'src/posts'),
    path.join(program.directory, 'src/data')
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
          include: path.dirname(require.resolve('gatsby-theme-blog-base')),
          use: [loaders.js()]
        }
      ]
    }
  })
}

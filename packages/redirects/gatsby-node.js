const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')

const DEFAULT_REDIRECT_CONTENTS = `
- from: /google
  to: https://google.com
- from: /foo
  to: /foo/bar
`

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions

  const result = await graphql(`
    query {
      redirects: allRedirectYaml {
        edges {
          node {
            from
            to
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.log(result.errors)
    throw new Error('Could not query redirects', result.errors)
  }

  const { redirects } = result.data

  redirects.edges.forEach(redirect => {
    createRedirect({
      fromPath: redirect.node.from,
      toPath: redirect.node.to,
      redirectInBrowser: true,
      isPermanent: true
    })
  })
}

exports.onPreBootstrap = ({ store }) => {
  const { program } = store.getState()

  const dir = path.join(program.directory, 'src/data')
  const file = path.join(program.directory, 'src/data/redirect.yml')

  if (!fs.existsSync(dir)) {
    mkdirp.sync(dir)
  }

  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, DEFAULT_REDIRECT_CONTENTS.trim())
  }
}

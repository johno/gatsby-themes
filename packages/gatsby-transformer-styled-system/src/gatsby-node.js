const crypto = require('crypto')
const systemDocs = require('system-docs')
const { GraphQLString, GraphQLJSON, } = require('gatsby/graphql')

const isComponentNode = node =>
  node.internal.mediaType === `application/javascript` ||
  node.internal.mediaType === `text/jsx`

const isComponent = Comp =>
  Comp && Comp['$$typeof'] && typeof Comp === 'object' && typeof Comp.render === 'function'

const digest = str =>
  crypto
    .createHash('md5')
    .update(str)
    .digest('hex')

exports.onCreateNode = async ({
  node,
  loadNodeContent,
  actions,
  createNodeId
}, {
  components
}) => {
  const { createNode, createParentChildLink } = actions

  if (!isComponentNode(node)) {
    return
  }

  const Component = components[node.name]
  if (!isComponent(Component)) {
    return
  }

  const name = Component.displayName || node.name

  const content = await loadNodeContent(node)
  const metadata = systemDocs(Component)
  const { tagName, propTypes, defaultProps } = metadata
  
  const nodeId = `${node.id}--${name}--StyledSystem`
  const contentDigest = digest(content)
  const css = metadata.componentStyle.rules.filter(s => typeof s === 'string').join('')

  let styledSystemNode = {
    name,
    tagName,
    propTypes,
    defaultProps,
    css,
    id: createNodeId(nodeId),
    children: [],
    parent: node.id,
    internal: {
      contentDigest,
      type: 'StyledSystem',
    },
  }

  createParentChildLink({ parent: node, child: styledSystemNode })
  createNode(styledSystemNode)
}

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name !== 'StyledSystem') {
    return
  }

  return {
    name: { type: GraphQLString },
    tagName: { type: GraphQLString },
    css: { type: GraphQLString },
    propTypes: { type: GraphQLJSON },
    defaultProps: { type: GraphQLJSON }
  }
}

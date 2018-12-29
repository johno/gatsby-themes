import React from 'react'
import { graphql } from 'gatsby'
import { Provider } from 'gatsby-ui'

import PostLink from '../components/PostLink'

function PostList({ data }) {
  const { allMdx: { edges } } = data
  return (
    <Provider>
      <>
        {edges.map(edge => <PostLink post={edge.node} />)}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </>
    </Provider>
  )
}

export default PostList

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
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
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

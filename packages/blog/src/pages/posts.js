import React from 'react'
import { graphql } from 'gatsby'

function PostList({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default PostList

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

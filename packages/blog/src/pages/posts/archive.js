import React from 'react'
import { graphql } from 'gatsby'
import { Container, Heading } from 'gatsby-ui'

import Layout from '../../components/Layout'
import PostLink from '../../components/PostLink'

function PostList({ data }) {
  const { allMdx: { edges: posts } } = data

  return (
    <Layout>
      <Container mt={[3, 4, 5]} maxWidth="measureWide">
        <Heading fontSize={3}>Archive</Heading>
        {posts.map(post => (
          <PostLink key={post.node.id} post={post.node} />
        ))}
      </Container>
    </Layout>
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
            archived
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
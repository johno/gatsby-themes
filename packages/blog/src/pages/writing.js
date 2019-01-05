import React from 'react'
import { graphql, Link as GatsbyLink } from 'gatsby'
import { Box, Container, Heading, Link } from 'gatsby-ui'

import Layout from '../components/Layout'
import PostLink from '../components/PostLink'

function PostList({ data }) {
  const { allMdx: { edges } } = data
  const posts = edges
    .filter(edge => !edge.node.frontmatter.archived)
    .filter(edge => !edge.node.frontmatter.draft)

  return (
    <Layout>
      <Container maxWidth="measureWide">
        <Heading fontSize={3}>Writing</Heading>
        {posts.map(post => (
          <PostLink key={post.node.id} post={post.node} />
        ))}
        <Box mt={[4, 4, 5]}>
          <Link as={GatsbyLink} to="/posts/archive" color="black">Archive</Link>
        </Box>
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
            path
            archived
            draft
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

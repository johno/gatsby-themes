import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Link } from 'gatsby-ui'

import PostLink from './PostLink'

const PostList = ({ data, filters = ['archived'] }) => {
  const { allMdx: { edges } } = data
  const posts = edges.filter(edge => {
    return !filters.some(filter => edge.node.frontmatter[filter])
  })

  return (
    <>
      {posts.map(post => (
        <PostLink key={post.node.id} post={post.node} />
      ))}
      <Box mt={[4, 4, 5]}>
        <Link as={GatsbyLink} to="/archive" color="black">Archive</Link>
      </Box>
    </>
  )
}

export default PostList

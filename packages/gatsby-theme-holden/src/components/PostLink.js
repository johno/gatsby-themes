import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Heading, Text, Box, Link } from 'gatsby-ui'

export const toPath = ({ frontmatter, parent = {} }) => {
  if (frontmatter.path) {
    return frontmatter.path
  }

  return [
    parent.sourceInstanceName,
    parent.name
  ].join('/')
}

const PostLink = ({ post }) => {
  const path = toPath(post)

  return (
    <Box mb={4}>
      <Link color="black" to={path} as={GatsbyLink}>
        <Heading>{post.frontmatter.title}</Heading>
        <Text fontSize={0} color="grays.8">
          {post.frontmatter.date}
        </Text>
        <Text fontSize={2} color="grays.8">
          {post.frontmatter.summary || post.excerpt}
        </Text>
      </Link>
    </Box>
  )
}

export default PostLink

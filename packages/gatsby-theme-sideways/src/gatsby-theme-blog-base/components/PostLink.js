import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Link, Heading, Text } from 'gatsby-ui'

const toPath = ({ frontmatter, parent = {} }) => {
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
    <Link as={GatsbyLink} to={path} color="black">
      <Box as="span" my={[3,3,4]} display="block">
        <Text fontSize={0} color="grays.8" mb={-2}>
          {post.frontmatter.date}
        </Text>
        <Heading fontSize={[4, 4, 6]}>
          {post.frontmatter.title}
        </Heading>
      </Box>
    </Link>
  )
}

export default PostLink

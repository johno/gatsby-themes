import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Flex, Heading, Text, Link } from 'gatsby-ui'

export default ({
  title,
  twitterHandle,
  githubHandle,
  ...props
}) => {
  return (
    <Box
      p={[3, 4, 4]}
      {...props}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Box>
            <Link as={GatsbyLink} to="/" color="grays.8">
              <Heading fontSize={1}>{title || 'hiiiiii'}</Heading>
            </Link>
          </Box>
          <Box my={3}>
            <Heading fontSize={1} color="grays.8">
              —
              <Text
                as="span"
                color="black"
                fontSize={1}
                fontWeight="bold"
                lineHeight="title"
              >
                —
              </Text>
            </Heading>
          </Box>
          <Box mb={4}>
            <Link as={GatsbyLink} to="/writing" color="black">
              <Heading fontSize={1}>
                Writing
              </Heading>
            </Link>
          </Box>
          <Box mb={4}>
            <Link as={GatsbyLink} to="/about" color="black">
              <Heading fontSize={1}>
                About
              </Heading>
            </Link>
          </Box>
          <Box mb={4}>
            <Link as={GatsbyLink} to="/contact" color="black">
              <Heading fontSize={1}>
                Contact
              </Heading>
            </Link>
          </Box>
        </Flex>
        <Flex mb={-3}>
          <Box mb={4}>
            <Link
              as={GatsbyLink}
              color="grays.8"
              to={`https://github.com/${githubHandle}`}
            >
              <Heading fontSize={1}>
                GitHub
              </Heading>
            </Link>
          </Box>
          <Box mb={4}>
            <Link
              as={GatsbyLink}
              color="grays.8"
              to={`https://twitter.com/${twitterHandle}`}
            >
              <Heading fontSize={1}>
                Twitter
              </Heading>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
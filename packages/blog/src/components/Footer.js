import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Flex, Heading, Text, Icon, Link } from 'gatsby-ui'

function Footer() {
  return (
    <Box as="footer" mt={[3, 4, 5]} p={[3, 4, 5]}>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Box>
            <Link as={GatsbyLink} to="/" color="grays.8">
              <Heading fontSize={1}>
                johno 
              </Heading>
            </Link>
          </Box>
          <Box mx={3}>
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
          <Box mr={4}>
            <Link as={GatsbyLink} to="/writing" color="black">
              <Heading fontSize={1}>
                Writing
              </Heading>
            </Link>
          </Box>
          <Box mr={4}>
            <Link as={GatsbyLink} to="/about" color="black">
              <Heading fontSize={1}>
                About
              </Heading>
            </Link>
          </Box>
          <Box mr={4}>
            <Link as={GatsbyLink} to="/contact" color="black">
              <Heading fontSize={1}>
                Contact
              </Heading>
            </Link>
          </Box>
        </Flex>
        <Flex>
          <Box mr={4}>
            <Link as={GatsbyLink} to="https://github.com/johno" color="grays.8">
              <Heading fontSize={1}>
                GitHub
              </Heading>
            </Link>
          </Box>
          <Box mr={4}>
            <Link as={GatsbyLink} to="https://twitter.com/4lpine" color="grays.8">
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

export default Footer

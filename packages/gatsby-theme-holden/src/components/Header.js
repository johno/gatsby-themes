import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import { Container, Box, Flex, Heading, Link } from 'gatsby-ui'

const Caps = styled.span`
  text-transform: uppercase;
`

export default () => (
  <Container>
    <Box pt={[3, 4, 5]} pb={3} textAlign="center">
      <Heading mb={5} fontSize={[3, 4, 4]}>
        <Caps>Holden</Caps>
      </Heading>
      <Flex m="auto" as="nav" flexWrap="wrap" justifyContent="center">
        <Link px={3} py={2} color="black" as={GatsbyLink} to="/">
          <Caps>Home</Caps>
        </Link>
        <Link px={3} py={2} color="black" as={GatsbyLink} to="/blog">
          <Caps>Blog</Caps>
        </Link>
        <Link px={3} py={2} color="black" as={GatsbyLink} to="/shop">
          <Caps>Shop</Caps>
        </Link>
        <Link px={3} py={2} color="black" as={GatsbyLink} to="/about">
          <Caps>About</Caps>
        </Link>
        <Link px={3} py={2} color="black" as={GatsbyLink} to="/contact">
          <Caps>Contact</Caps>
        </Link>
      </Flex>
    </Box>
  </Container>
)
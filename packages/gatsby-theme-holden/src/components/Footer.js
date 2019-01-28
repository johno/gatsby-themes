import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import { Container, Box, Flex, Heading, Link } from 'gatsby-ui'

const Caps = styled.span`
  text-transform: uppercase;
`

export default () => (
  <Container as="footer">
    <Box pt={[4, 5, 6]} pb={3} textAlign="center">
      <Flex m="auto" as="nav" flexWrap="wrap" justifyContent="center">
        <Link fontSize={0} px={3} py={2} color="black" as={GatsbyLink} to="/">
          <Caps>Home</Caps>
        </Link>
        <Link fontSize={0} px={3} py={2} color="black" as={GatsbyLink} to="/blog">
          <Caps>Blog</Caps>
        </Link>
        <Link fontSize={0} px={3} py={2} color="black" as={GatsbyLink} to="/shop">
          <Caps>Shop</Caps>
        </Link>
        <Link fontSize={0} px={3} py={2} color="black" as={GatsbyLink} to="/about">
          <Caps>About</Caps>
        </Link>
        <Link fontSize={0} px={3} py={2} color="black" as={GatsbyLink} to="/contact">
          <Caps>Contact</Caps>
        </Link>
      </Flex>
      <Heading mt={3} fontSize={[1, 2, 2]}>
        <Caps>Holden</Caps>
      </Heading>
      <Heading mt={5} mb={3} color="grays.7" fontSize="12px">
        © {(new Date()).getFullYear()}
      </Heading>
    </Box>
  </Container>
)
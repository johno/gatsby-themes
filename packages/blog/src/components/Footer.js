import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Flex, Heading, Text, Icon, Link } from 'gatsby-ui'

import Nav from './Nav'

function Footer(props) {
  return <Nav as="footer" {...props} />
}

export default Footer

import React from 'react'
import { graphql, StaticQuery, Link as GatsbyLink } from 'gatsby'
import { Box, Flex, Heading, Text, Link } from 'gatsby-ui'

const NavLinks = ({
  variant,
  title,
  twitterHandle,
  githubHandle,
  ...props
}) => {
  const isVertical = variant === 'vertical'
  const logoWrapProps = isVertical ? { my: 3 } : { mx: 3}
  const linkWrapProps = isVertical ? { mb: 4 } : { mr: 4 }

  return (
    <Box
      mt={isVertical ? null : [3, 4, 5]}
      p={isVertical ? [3, 4, 4] : [3, 4, 5]}
      {...props}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Box>
            <Link as={GatsbyLink} to="/" color="grays.8">
              <Heading fontSize={1}>{title || 'hiiiiii'}</Heading>
            </Link>
          </Box>
          <Box {...logoWrapProps}>
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
          <Box {...linkWrapProps}>
            <Link as={GatsbyLink} to="/writing" color="black">
              <Heading fontSize={1}>
                Writing
              </Heading>
            </Link>
          </Box>
          <Box {...linkWrapProps}>
            <Link as={GatsbyLink} to="/about" color="black">
              <Heading fontSize={1}>
                About
              </Heading>
            </Link>
          </Box>
          <Box {...linkWrapProps}>
            <Link as={GatsbyLink} to="/contact" color="black">
              <Heading fontSize={1}>
                Contact
              </Heading>
            </Link>
          </Box>
        </Flex>
        <Flex mb={isVertical ? -3 : 0}>
          <Box {...linkWrapProps}>
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
          <Box {...linkWrapProps}>
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

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            githubHandle
            twitterHandle
          }
        }
      }
    `}
    render={data => (
      <NavLinks {...props} {...data.site.siteMetadata} />
    )}
  />
)

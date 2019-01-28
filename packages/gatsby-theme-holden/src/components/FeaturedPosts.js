import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Heading, Flex, Box } from 'gatsby-ui'

const PrimaryPost = styled(Box)`
  position: relative;
  height: 400px;
  overflow: hidden;
`

const SecondaryPost = styled(Box)`
  position: relative;
  height: 195px;
  overflow: hidden;
`

const PostMetadata = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
  padding: 20px;
`

const Category = styled.span`
  text-transform: uppercase;
`

const Title = styled(Heading)`
  text-shadow: 0 1px 2px rgba(0, 0, 0, .1);
  line-height: 1;
`

export default ({ posts: [first, second, third ]}) => (
  <Flex flexWrap="wrap">
    <PrimaryPost pb={[10, 10, 0]} width={[1, 1, 7/10]}>
      <Link to={first.frontmatter.path}>
        <Image {...first.frontmatter.image.childImageSharp} />
        <PostMetadata>
          <Box textAlign="center" width={1}>
            <Heading fontSize={0} mb={2}>
              <Category>{first.frontmatter.category}</Category>
            </Heading>
            <Title fontSize={[3, 4, 5]}>{first.frontmatter.title}</Title>
            <Heading fontSize={0} mt={3} fontWeight="normal">
              {first.frontmatter.date}
            </Heading>
          </Box>
        </PostMetadata>
      </Link>
    </PrimaryPost>
    <Box pl={[0, 0, 10]} width={[1, 1, 3/10]}>
      <SecondaryPost mb={10}>
        <Link to={second.frontmatter.path}>
          <Image {...second.frontmatter.image.childImageSharp} />
          <PostMetadata>
          <Box textAlign="center" width={1}>
            <Heading fontSize={0} mb={2}>
              <Category>{second.frontmatter.category}</Category>
            </Heading>
            <Title fontSize={[3, 4, 4]}>{second.frontmatter.title}</Title>
            <Heading fontSize={0} mt={3} fontWeight="normal">
              {second.frontmatter.date}
            </Heading>
          </Box>
        </PostMetadata>
        </Link>
      </SecondaryPost>
      <SecondaryPost>
        <Link to={third.frontmatter.path}>
          <Image {...third.frontmatter.image.childImageSharp} />
          <PostMetadata>
          <Box textAlign="center" width={1}>
            <Heading fontSize={0} mb={2}>
              <Category>{third.frontmatter.category}</Category>
            </Heading>
            <Title fontSize={[3, 4, 4]}>{third.frontmatter.title}</Title>
            <Heading fontSize={0} mt={3} fontWeight="normal">
              {third.frontmatter.date}
            </Heading>
          </Box>
        </PostMetadata>
        </Link>
      </SecondaryPost>
    </Box>
  </Flex>
)
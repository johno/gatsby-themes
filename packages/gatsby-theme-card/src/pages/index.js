import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Heading, Text, Flex, Box, Divider, Icon, Link } from 'gatsby-ui'
import Image from 'gatsby-image'

import Layout from '../components/Layout'
import Card from '../components/Card'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`

const ImageWrap = styled(Box)`
  img {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`

const ContentWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const query = graphql`
  query {
    site: site {
      siteMetadata {
        name
        description
        twitterHandle
        githubHandle
        dribbbleHandle
        email
      }
    }

    img: file(
      sourceInstanceName: { eq: "image" },
      relativePath: { eq: "me.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500) {
          base64
          src
          srcSet
          srcWebp
          srcSetWebp
          aspectRatio
          sizes
          presentationHeight
          presentationWidth
        }
      }
    }
  }
`

export default ({ data: { img: { childImageSharp: img }, site: { siteMetadata } } }) => (
  <Layout>
    <Wrap>
      <Card>
        <Flex flexWrap={['wrap', 'wrap', 'nowrap']}>
          <ImageWrap width={[1, 1, 800]}>
            <Image {...img} />
          </ImageWrap>
          <ContentWrap py={[3, 4, 5]} px={[3, 4, 6]}>
            <Heading fontSize={[4, 5, 6]} mb={3}>{siteMetadata.name}</Heading>
            <Text fontSize={3}>{siteMetadata.description}</Text>
            <Divider />
            <Flex>
              {siteMetadata.twitterHandle && (
                <Link mr={3} href={`https://twitter.com/${siteMetadata.twitterHandle}`}>
                  <Icon name="twitter" color="fff" width="30" />
                </Link>
              )}
              {siteMetadata.githubHandle && (
                <Link mr={3} href={`https://github.com/${siteMetadata.githubHandle}`}>
                  <Icon name="github" color="fff" width="30" />
                </Link>
              )}
              {siteMetadata.dribbbleHandle && (
                <Link mr={3} href={`https://dribbble.com/${siteMetadata.dribbbleHandle}`}>
                  <Icon name="dribbble" color="fff" width="30" />
                </Link>
              )}
              {siteMetadata.email && (
                <Link mr={3} href={`mailto:${siteMetadata.email}`}>
                  <Icon name="mail_outline" color="fff" width="30" />
                </Link>
              )}
            </Flex>
          </ContentWrap>
        </Flex>
      </Card>
    </Wrap>
  </Layout>
)

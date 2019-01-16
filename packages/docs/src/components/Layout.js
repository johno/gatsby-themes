import React from 'react'
import { StaticQuery, Link as GatsbyLink, graphql } from 'gatsby'
import Sidepane from 'sidepane'
import { Box, Flex, Link, Provider } from 'gatsby-ui'

console.log(Link)

export default ({ children }) => (
  <Provider>
    <StaticQuery
      query={graphql`
        query {
          pages: allSitePage(
            filter: { path: { ne: "/dev-404-page/" } }
          ) {
            edges {
              node {
                path
                parent {
                  ... on File {
                    name
                    sourceInstanceName
                  }
                }
                pluginCreator {
                  name
                }
                context {
                  title
                  displayName
                }
              }
              next {
                path
              }
              previous {
                path
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Flex>
            <Sidepane>
              {data.pages.edges.map(({ node: page }) => {
                if (page.path === '/') {
                  return null
                }

                let name = page.path
                if (page.context && (page.context.title || page.context.displayName)) {
                  name = page.context.title || page.context.displayName
                } else if (page.parent && page.parent.name) {
                  name = page.parent.name
                }

                return (
                  <Box>
                    <Link key={page.path} as={GatsbyLink} to={page.path}>{name}</Link>
                  </Box>
                )
              })}
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </Sidepane>
          </Flex>
          <Box>
            {children}
          </Box>
        </>
      )}
    />
  </Provider>
)

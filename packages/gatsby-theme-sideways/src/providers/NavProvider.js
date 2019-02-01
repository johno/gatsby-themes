import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export const NavContext = React.createContext()

export default ({ children }) => (
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
      <NavContext.Provider value={data.site.siteMetadata}>
        <>{children}</>
      </NavContext.Provider>
    )}
  />
)

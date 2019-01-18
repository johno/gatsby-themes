import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

const Header = ({ title = 'Pixyll', headerLinks }) => (
  <header className="site-header px2 px-responsive">
    <div className="mt2 wrap">
      <div className="measure">
        <a href="/" className="site-title">{title}</a>
        <nav className="site-nav">
          {headerLinks.map(link =>
            <Link key={link.title} to={link.path}>{link.title}</Link>
          )}
        </nav>
        <div class="clearfix"></div>
      </div>
    </div>
  </header>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            headerLinks {
              title
              path
            }
          }
        }
      }
    `}
    render={data => (
      console.log(data) || <Header {...data.site.siteMetadata} />
    )}
  />
)

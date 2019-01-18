import React from 'react'

import Header from '../../components/Header'

import '../../styles/pixyll.scss'

const Layout = ({ children }) => (
  <div className="site">
    <div className="site-wrap px2">
      <Header />
      <div className="measure">
        {children}
      </div>
    </div>
  </div>
)

export default Layout

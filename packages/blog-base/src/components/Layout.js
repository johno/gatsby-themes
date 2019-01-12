import React from 'react'
import PropTypes from 'prop-types'

/**
 * Layout component wrapping all theme pages
 */
const Layout = ({ children }) => <>{children}</>

Layout.propTypes = {
  /**
   * Child component
   */
  children: PropTypes.children.isRequired
}

export default Layout
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {ThemeProvider} from 'styled-components'
import {MDXProvider} from '@mdx-js/tag'

import theme from './theme'
import mdComponents from './mdComponents'

/**
 * Gatsby UI provider that handles theming and MDX component mapping
 */
export const Provider = ({children}) => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={mdComponents}>
      <Fragment>{children}</Fragment>
    </MDXProvider>
  </ThemeProvider>
)

Provider.displayName = 'gatsby-ui.Provider'
Provider.propTypes = {
  /**
   * App component to be wrapped with default providers
   */
  children: PropTypes.node.isRequired
}

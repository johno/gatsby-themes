import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {ThemeProvider} from 'styled-components'
import {MDXProvider} from '@mdx-js/tag'

import theme from './theme'
import mdComponents from './mdComponents'

export const Provider = ({children}) => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={mdComponents}>
      <Fragment>{children}</Fragment>
    </MDXProvider>
  </ThemeProvider>
)
Provider.propTypes = {
  children: PropTypes.node.isRequired
}

Provider.displayName = 'gatsby-ui.Provider'

import React from 'react'
import { Provider } from 'gatsby-ui'
import { createGlobalStyle } from 'styled-components'

import Header from './Header'
import Footer from './Footer'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
  }
`

export default ({ children }) => (
  <Provider>
    <>
      <Header />
      {children}
      <Footer />
      <GlobalStyle />
    </>
  </Provider>
)

import React from 'react'
import { Container } from 'gatsby-ui'
import { createGlobalStyle } from 'styled-components'

import Footer from './Footer'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  #___gatsby > div {
    display: flex;
    min-height: 100vh;
    width: 100vw;
  }
  #___gatsby > div > div:first-child {
    flex: 1;
  }
  #___gatsby > div > footer {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    height: 100vh;
  }
`

const Layout = ({ children }) => (
  <>
    <Container>
      <Container maxWidth="measureWide">
        {children}
      </Container>
    </Container>
    <Footer variant="vertical" />
    <GlobalStyle />
  </>
)

export default Layout

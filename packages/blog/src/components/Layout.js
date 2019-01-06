import React from 'react'
import { Container } from 'gatsby-ui'
import { createGlobalStyle } from 'styled-components'

import Footer from './Footer'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  #___gatsby > div {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  #___gatsby > div > div:first-child {
    flex: 1;
  }
`

function Layout({ children }) {
  return (
    <>
      <Container mt={[3, 4, 5]}>
        {children}
      </Container>
      <Footer />
      <GlobalStyle />
    </>
  )
}

export default Layout

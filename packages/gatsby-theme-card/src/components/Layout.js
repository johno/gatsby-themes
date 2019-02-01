import React from 'react'
import { Container, Provider} from 'gatsby-ui'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100vh;
    background: linear-gradient(132deg, #3F2B96 0%, #A8C0FF 100%);
  }
  * {
    box-sizing: border-box;
  }
`

export default props => (
  <Provider>
    <>
      <Container {...props} />
      <GlobalStyle />
    </>
  </Provider>
)
import React from 'react'
import { Provider, Container } from 'gatsby-ui'

function Layout({ children }) {
  return (
    <Provider>
      <Container mt={[3, 4, 5]}>
        {children}
      </Container>
    </Provider>
  )
}

export default Layout

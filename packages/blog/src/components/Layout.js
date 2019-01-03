import React from 'react'
import { Container } from 'gatsby-ui'

function Layout({ children }) {
  return (
    <Container mt={[3, 4, 5]}>
      {children}
    </Container>
  )
}

export default Layout

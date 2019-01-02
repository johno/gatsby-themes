import React from 'react'
import { Provider } from 'gatsby-ui'

function Layout({ children }) {
  return (
    <Provider>
      <>
        {children}
      </>
    </Provider>
  )
}

export default Layout

import React from 'react'
import { Provider } from 'gatsby-ui'

export default ({ children }) => (
  <Provider>
    <>
      {children}
    </>
  </Provider>
)

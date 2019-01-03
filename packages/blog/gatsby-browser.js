import React from 'react'
import {Provider} from 'gatsby-ui'

export const wrapRootElement = ({ element }) => (
  <Provider>{element}</Provider>
)

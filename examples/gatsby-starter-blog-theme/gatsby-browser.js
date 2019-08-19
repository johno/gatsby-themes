import React from 'react'
import Wizard from './src/components/wizard'

export const wrapRootElement = ({ element }) => (
  <>
    <Wizard />
    {element}
  </>
)

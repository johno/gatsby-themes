import React from 'react'
import styled from 'styled-components'

import {Text} from './Text'

export const Link = styled(Text)`
  text-decoration: none;
`

Link.displayName = 'gatsby-ui.Link'
Link.defaultProps = {
  as: 'a'
}

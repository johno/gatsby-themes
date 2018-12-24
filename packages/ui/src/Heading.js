import styled from 'styled-components'

import {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  textAlign
} from 'styled-system'

import {fontFamilies} from './theme'

export const Heading = styled.h3`
  font-family: ${fontFamilies.sans};

  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
  ${textAlign}
`

Heading.displayName = 'gatsby-ui.Heading'
Heading.defaultProps = {
  m: 0,
  fontSize: 3,
  fontWeight: 'bold',
  lineHeight: 'title'
}

import styled from 'styled-components'
import {space, width, maxWidth, borderStyle, borderColor} from 'styled-system'

export const Divider = styled.hr`
  border-top: none;
  border-left: none;
  border-right: none;

  ${borderColor}
  ${borderStyle}
  ${space}
  ${width}
`

Divider.displayName = 'gatsby-ui.Divider'
Divider.defaultProps = {
  borderStyle: 'thin solid',
  borderColor: 'grays.1',
  my: 4
}

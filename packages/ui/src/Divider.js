import styled from 'styled-components'
import {space, width, maxWidth, borderColor} from 'styled-system'

export const Divider = styled.hr`
  border-top: none;
  border-left: none;
  border-right: none;

  ${borderColor}
  ${maxWidth}
  ${space}
  ${width}
`

Divider.displayName = 'gatsby-ui.Divider'
Divider.defaultProps = {
  borderColor: 'grays.1',
  my: 4
}

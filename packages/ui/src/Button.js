import styled from 'styled-components'

import {color, space, fontSize, fontWeight} from 'styled-system'

export const Button = styled.button`
  appearance: none;
  border: none;
  outline: none;
  border-radius: 6px;
  text-decoration: none;

  ${color}
  ${fontSize}
  ${fontWeight}
  ${space}
`

Button.displayName = 'gatsby-ui.Button'
Button.defaultProps = {
  bg: 'blues.5',
  color: 'white',
  py: 2,
  px: 4,
  fontWeight: 'bold',
  fontSize: 2
}

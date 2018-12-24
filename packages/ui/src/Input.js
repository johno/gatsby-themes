import styled from 'styled-components'

import {borderColor, color, space, fontSize, width} from 'styled-system'

import {colors} from './theme'

export const Input = styled.input`
  appearance: none;
  border: thin solid;
  outline: none;
  border-radius: 6px;

  &:hover {
    border-color: ${colors.grays[3]};
  }

  &:focus {
    border-color: ${colors.grays[7]};
  }

  ${borderColor}
  ${color}
  ${fontSize}
  ${space}
  ${width}
`

Input.displayName = 'gatsby-ui.Input'
Input.defaultProps = {
  bg: 'transparent',
  borderColor: 'grays.1',
  p: 2,
  fontSize: 2
}

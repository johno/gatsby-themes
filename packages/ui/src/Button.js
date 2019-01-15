import styled from 'styled-components'

import {color, space, fontSize, fontWeight, propTypes} from 'styled-system'

/** @component */
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
Button.propTypes = {
  as: propTypes.numberOrString,
  bg: propTypes.responsive,
  color: propTypes.responsive,
  fontWeight: propTypes.responsive,
  fontSize: propTypes.responsive,
  ...space.propTypes
}

import styled from 'styled-components'
import {borderColor, space, propTypes} from 'styled-system'
import {Text} from './Text'

/** @component */
export const Blockquote = styled(Text)`
  border-left: 4px solid;

  & > p {
    font-size: inherit;
  }

  & > p:first-child {
    margin-top: 0;
  }

  & > p:last-child {
    margin-bottom: 0;
  }

  ${borderColor};
`

Blockquote.displayName = 'gatsby-ui.Blockquote'
Blockquote.propTypes = {
  as: propTypes.numberOrString,
  bg: propTypes.responsive,
  borderColor: propTypes.responsive,
  color: propTypes.responsive,
  fontSize: propTypes.responsive,
  fontWeight: propTypes.responsive,
  lineHeight: propTypes.responsive,
  textAlign: propTypes.responsive,
  ...space.propTypes
}
Blockquote.defaultProps = {
  as: 'blockquote',
  borderColor: 'grays.2',
  color: 'grays.8',
  p: 0,
  pl: 3,
  my: 4,
  ml: 0,
  mr: 0,
  fontSize: 3
}

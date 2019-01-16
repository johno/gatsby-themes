import styled from 'styled-components'
import {space, propTypes} from 'styled-system'

import {Text} from './Text'

/** @component */
export const Link = styled(Text)`
  text-decoration: none;
  cursor: pointer;
`

Link.displayName = 'gatsby-ui.Link'
Link.defaultProps = {
  as: 'a'
}
Link.propTypes = {
  as: propTypes.numberOrString,
  bg: propTypes.responsive,
  color: propTypes.responsive,
  fontSize: propTypes.responsive,
  fontWeight: propTypes.responsive,
  lineHeight: propTypes.responsive,
  textAlign: propTypes.responsive,
  ...space.propTypes
}

import styled from 'styled-components'
import {space, propTypes} from 'styled-system'
import {Text} from './Text'

/** @component */
export const ListItem = styled(Text)`
  color: inherit;

  & *:matches(p) {
    margin: 0;
  }
`

/** @component */
export const OrderedList = styled(Text)`
  & *:matches(ol, ul) {
    padding-left: 40px;
  }
`

/** @component */
export const UnorderedList = styled(Text)`
  & *:matches(ol, ul) {
    padding-left: 40px;
  }
`

ListItem.displayName = 'gatsby-ui.ListItem'
ListItem.defaultProps = {
  as: 'li',
  fontSize: 2,
  lineHeight: 'copy'
}
ListItem.propTypes = {
  as: propTypes.numberOrString,
  bg: propTypes.responsive,
  color: propTypes.responsive,
  fontSize: propTypes.responsive,
  fontWeight: propTypes.responsive,
  lineHeight: propTypes.responsive,
  textAlign: propTypes.responsive,
  ...space.propTypes
}


OrderedList.displayName = 'gatsby-ui.OrderedList'
OrderedList.defaultProps = {
  as: 'ol',
  pl: 0,
  mt: 1,
  mb: 3
}
OrderedList.propTypes = {
  as: propTypes.numberOrString,
  bg: propTypes.responsive,
  color: propTypes.responsive,
  fontSize: propTypes.responsive,
  fontWeight: propTypes.responsive,
  lineHeight: propTypes.responsive,
  textAlign: propTypes.responsive,
  ...space.propTypes
}


UnorderedList.displayName = 'gatsby-ui.UnorderedList'
UnorderedList.defaultProps = {
  as: 'ul',
  pl: 0,
  mt: 1,
  mb: 3
}
UnorderedList.propTypes = {
  as: propTypes.numberOrString,
  bg: propTypes.responsive,
  color: propTypes.responsive,
  fontSize: propTypes.responsive,
  fontWeight: propTypes.responsive,
  lineHeight: propTypes.responsive,
  textAlign: propTypes.responsive,
  ...space.propTypes
}

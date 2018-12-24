import styled from 'styled-components'
import {Text} from './Text'

export const ListItem = styled(Text)`
  color: inherit;

  & *:matches(p) {
    margin: 0;
  }
`

export const OrderedList = styled(Text)`
  & *:matches(ol, ul) {
    padding-left: 40px;
  }
`

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

OrderedList.displayName = 'gatsby-ui.OrderedList'
OrderedList.defaultProps = {
  as: 'ol',
  pl: 0,
  mt: 1,
  mb: 3
}

UnorderedList.displayName = 'gatsby-ui.UnorderedList'
UnorderedList.defaultProps = {
  as: 'ul',
  pl: 0,
  mt: 1,
  mb: 3
}

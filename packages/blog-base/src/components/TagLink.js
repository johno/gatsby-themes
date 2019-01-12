import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

/**
 * Link component for the tag listing page
 */
const TagLink = ({ fieldValue, totalCount }) => {
  const path = `/tags/${fieldValue}`

  return (
    <Link to={path}>
      <h3>{fieldValue} ({totalCount})</h3>
    </Link>
  )
}

TagLink.propTypes = {
  /**
   * Tag name
   */
  fieldValue: PropTypes.string,
  /**
   * Number of posts with tag
   */
  totalCount: PropTypes.number
}

export default TagLink

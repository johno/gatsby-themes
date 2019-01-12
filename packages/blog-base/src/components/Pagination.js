import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

/**
 * Component for pagination navigation
 */
const Pagination = ({
  isFirst,
  isLast,
  nextPage,
  prevPage
}) => (
  <>
    {isFirst ? null : <Link to={prevPage}>Previous</Link>}
    {isLast ? null : <Link to={nextPage}>Next</Link>}
  </>
)

Pagination.propTypes = {
  /**
   * Whether this is the first post list page
   */
  isFirst: PropTypes.boolean,
  /**
   * Whether this is the last post list page
   */
  isLast: PropTypes.boolean,
  /**
   * Path for the next page in the post pagination
   */
  nextPage: PropTypes.string,
  /**
   * Path for the previous page in the post pagination
   */
  prevPage: PropTypes.string
}

export default Pagination
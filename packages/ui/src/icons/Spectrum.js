// This icon isn't currently on icon.now.sh

import React from 'react'
import PropTypes from 'prop-types'

export const Spectrum = ({size}) => (
  <svg viewBox="0 0 16 16" width={size} height={size}>
    <g>
      <path d="M0,1.067A1.067,1.067,0,0,1,1.067,0H2A14,14,0,0,1,16,14v.933A1.067,1.067,0,0,1,14.933,16H9.067A1.067,1.067,0,0,1,8,14.933V14A6,6,0,0,0,2,8H1.067A1.067,1.067,0,0,1,0,6.933Z" />
    </g>
  </svg>
)

Spectrum.displayName = 'unified.icons.Spectrum'
Spectrum.defaultProps = {
  size: 64
}
Spectrum.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

import React from 'react'

import TagLink from './TagLink'

const TagList = ({ data }) => {
  const { allMdx: { group: tags } } = data

  return (
    <>
      {tags.map(tag => (
        <TagLink key={tag.nodeValue} {...tag} />
      ))}
    </>
  )
}

export default TagList

import React from 'react'
import {Heading, Provider} from 'gatsby-ui'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const DESCRIPTIONS = {
  as: 'Element that the component will render as.',
  alignSelf: 'Aligns flex items of the current flex line overriding the align-items value',
  bg: 'Set background color, pulls from colors in theme',
  borderColor: 'Set border color, pulls from colors in theme',
  boxShadow: 'Set box shadow, pulls from shadows in theme',
  color: 'Set text color, pulls from colors in theme',
  display: 'Set display for the element',
  flex: 'Set flex attribute',
  order: 'Set flex order',
  textAlign: 'Set text alignment',
  width: 'Set width'
}

export default ({
  title,
  metadata,
  docs
}) => {

  if (docs) {
    console.log(docs)
    return (
      <>
        <MDXRenderer>{docs}</MDXRenderer>
        <Provider>
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {metadata.props.map(prop =>
              <tr key={prop.name}>
                <td>{prop.name}</td>
                <td>{prop.defaultValue ? prop.defaultValue.value : 'None'}</td>
                <td>{prop.description || DESCRIPTIONS[prop.name] || 'None'}</td>
              </tr>
            )}
          </tbody>
        </table>
        </Provider>
      </>
    )
  }

  return (
    <>
      <Heading as="h1" fontSize={8}>{title}</Heading>
      <table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {metadata.props.map(prop =>
            <tr key={prop.name}>
              <td>{prop.name}</td>
              <td>{prop.defaultValue ? prop.defaultValue.value : 'None'}</td>
              <td>{prop.description}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}
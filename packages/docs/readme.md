# Docs

> :warning: This is experimental and subject to breaking changes.

## Installation

```sh
yarn add gatsby-theme-docs
```

## Usage

```js
// gatsby-config.js
module.exports = {
  return {
    __experimentalThemes: [
      {
        resolve: 'gatsby-theme-docs',
        options: {
          docsPath: '/docs'
        }
      }
    ]
  }
}
```

### Configuration

Key | Default | Description
--- | --- | ---
`docsPath` | `/` | Root path for documentation pages
`componentDocsPath` | `/components` | Path for rendered component docs pages
`componentsSourcePath` | `src/components` | Path for components source files
`formatDisplayName` | N/A | Format display name for the url based on the node (Example: `({ displayName }) => displayName.replace(/^gatsby-ui\./, '')`)

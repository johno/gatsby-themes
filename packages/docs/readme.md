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
`docsPath` | `/docs` | Root path for documentation pages
`componentsPath` | `src/components` | Path for components source files

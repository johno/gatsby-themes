# gatsby-theme-redirects

`gatsby-theme-redirects` allows you to specify a manifest of legacy redirects in `src/data/redirects.yml`.

## Installation

```sh
yarn add gatsby-theme-redirects
```

## Usage

```js
// gatsby-config.js
module.exports = {
  return {
    __experimentalThemes: [
      {
        resolve: 'gatsby-theme-redirects',
        options: {}
      }
    ]
  }
}
```

```yml
# src/data/redirect.yml
- from: /foo
  to: /bar
- from: /baz
  to: /other
```

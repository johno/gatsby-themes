# gatsby-theme-sideways

A minimal blog theme for developers.
I built this theme for my personal website, <https://johno.com>, but anyone can use and modify however they'd like.

## Installation

```sh
yarn add gatsby-theme-sideways
```

## Usage

```js
// gatsby-node.js
module.exports = {
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-redirects',
      options: {}
    }
  ]
}
```

### Configuration

Option | Default | Description
--- | --- | ----
`title` | None | Title of your website
`twitterHandle` | None | Your Twitter handle
`githubHandle` | None | Your GitHub handle

### Customization

In order to customize the theme to your needs you can use component shadowing.
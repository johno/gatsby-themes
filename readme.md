# Gatsby themes

A collection of themes using Gatsby's theming API and an experimental `gatsby-ui` library.

## Libraries

- `gatsby-ui`: Themeable UI primitives for Gatsby sites/themes

## Themes

- `gatsby-theme-sideways`: Minimal blog theme for developers with a sideways footer for links

## `gatsby-theme-sideways`

A minimal blog theme for developers.
I built this theme for my personal website, <https://johno.com>, but anyone can use and modify however they'd like.

### Configuration

Option | Default | Description
--- | --- | ----
`title` | None | Title of your website
`twitterHandle` | None | Your Twitter handle
`githubHandle` | None | Your GitHub handle

### Customization

In order to customize the theme to your needs you can use component shadowing.

## TODO

- document gatsby-ui
- document gatsby-theme-minimal-blog (maybe come up with a better name?)
- SEO component and configuration
- favicon, maybe base it off accent color and dynamically link it?
- GatsbyLink-based component that ties active style into styled-system
- configurable accent color, container width, nav styles

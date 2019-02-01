# [WIP] Gatsby themes

> :warning: Please note that these themes are currently deemed unstable and can have breaking changes

A collection of themes using Gatsby's theming API and an experimental `gatsby-ui` library.
These themes aren't yet deemed stable or ready for use in the wild.
They're more of an exploration with theming and to test out potential "best practices".

## Libraries

- `gatsby-ui`: Themeable UI primitives for Gatsby sites/themes

## Themes

- `gatsby-theme-blog-base`: Base theme that provides the necessary configuration and plugins for a basic blog
- `gatsby-theme-sideways`: Minimal blog theme for developers with a sideways footer for links
- `gatsby-theme-holden`: Image-based blog theme for those that like to peruse unsplash
- `gatsby-theme-card`: Profile card theme for a simple splash page and social links
- `gatsby-theme-docs`: Base documentation theme that uses MDX/react-docgen/styled-system to generate basic documentation for a component library
- `gatsby-theme-redirects`: Add a redirects manifest to your site to redirect legacy urls to their new location

## Development

This project uses yarn workspaces, and each directory in `/examples` is exposed as a workspace.
To run the `docs` project you can run the following:

```
yarn
```

```
yarn workspace sideways start
```

## TODO

- document gatsby-ui
- favicon, maybe base it off accent color and dynamically link it?
- GatsbyLink-based component that ties active style into styled-system

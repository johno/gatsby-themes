# Gatsby UI

Gatsby UI provides the basic building blocks for creating powerful and expressive websites built with React and [Gatsby][].
It uses [styled-system][] and [styled-components][] to handle theming and styling.

It's inspired by atomic CSS approaches like [Tachyons][] and [Basscss][], but instead uses CSS-in-JS to improve the authoring experience.
Styles like spacing, typography, and colors are based on scales, but allow for an opt-out for one off styles.

The following would define the `backgroundColor` as `theme.colors.primary`:

```js
<Button bg="primary" />
```

If you'd like, you can specify any value, like `tomato`. If no theme value exists for a property, it falls back to the provided value:

```js
<Button bg="tomato" />
```

## Installation

```sh
yarn add gatsby-ui
```

## Usage

```js
import {
  Box,
  Flex,
  Heading,
  Text,
  Provider
} from 'gatsby-ui'
```

[Gatsby]: https://gatsbyjs.org
[Tachyons]: https://tachyons.io
[Basscss]: https://basscss.com
[styled-system]: https://github.com/jxnblk/styled-system
[styled-components]: https://github.com/styled-components
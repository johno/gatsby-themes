# Creating a theme using MDX

- setup yarn workspaces
- scaffold out theme package
- scaffold out the starter and its content
- add index.js in the theme package
- configure gatsby-mdx
- programmatically create pages
- allow customization via options and site metadata
- mdx provider
- define customizable props for long form content/mdx
- import * as ui from 'theme/ui'; ui.foo = bar; export default ui;
- difference between path.join and require.resolve for page creator
- theme needs to transpile itself right now

## Random notes/thoughts/issues

- MDXRenderer doesn't seem to pick up Provider
- Separation of renderer and query for data backed pages/templates
- Can't use `__experimentalThemes: ['fooo']` shortcut
- Theme doesn't work due to lack of transpilation of gatsby-ssr/gatsby-browser
- Getting config in theme's gatsby-config

## Props APIs

In addition to component shadowing, it might be desirable to simply specify a few props.
I'm not sure what the best API for this might be yet, but let's first consider the following example of a PostLink:

```js
<Link as={GatsbyLink} to={path} color="black">
  <Box as="span" my={[2,3,4]} display="block">
    <Text fontSize={0} color="grays.8">
      {post.frontmatter.date}
    </Text>
    <Heading fontSize={4}>
      {post.frontmatter.title}
    </Heading>
  </Box>
</Link>
```

The cool part with the following styled-system API is that we can infer what possible props can be passed to the props and what their values map to.
This will be useful in generating documentation and, down the road, a WYSIWYG/theme editor.

#### Potential ways to modify

Using "props" for each particular element that's customizable and then shadowing it.

```js
// src/gatsby-theme-name/components/PostLink.js
import { PostLink } from 'gatsby-theme-name/components'

PostLink.defaultProps = {
  wrapperProps: {
    my: 1
  },
  titleProps: {
    fontSize: 8,
    color: 'green'
  }
}

export default PostLink
```

Using a theme props provider which can be hooked into by components that are able to be themed.

```js
cost themeProps = {
  postLink: {
    wrapperProps: {
      my: 1
    },
    titleProps: {
      fontSize: 8,
      color: 'green'
    }
  }
}

<Provider themeProps={themeProps} {...otherStuff} />
```

Using slots

```js
// src/gatsby-theme-name/components/PostLink.js
import { PostLink } from 'gatsby-theme-name/components'
import { Text } from 'gatsby-ui'

function MyPostLink(props) {
  return (
    <PostLink
      {...props}
      renderDate={dateProps => <Text {...dateProps} color="purple"/>}
    />
  )
}
```

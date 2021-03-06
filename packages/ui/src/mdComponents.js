import React from 'react'

import {
  Heading,
  Text,
  Link,
  Code,
  CodeBlock,
  Blockquote,
  OrderedList,
  UnorderedList,
  ListItem,
  Table
} from '.'

/**
 * MDX component mapping to be passed to the MDXProvider at the layout level
 */
export default {
  h1: props => <Heading as="h1" color="mdx.h1" mb={3} fontSize={5} {...props} />,
  h2: props => <Heading as="h2" color="mdx.h2" mt={4} mb={3} fontSize={4} {...props} />,
  h3: props => <Heading as="h3" color="mdx.h3" mt={4} mb={3} fontSize={3} {...props} />,
  h4: props => <Heading as="h4" color="mdx.h4" mt={4} mb={3} fontSize={2} {...props} />,
  h5: props => <Heading as="h5" color="mdx.h5" mt={4} mb={3} fontSize={1} {...props} />,
  h6: props => <Heading as="h6" color="mdx.6" mt={4} mb={3} fontSize={1} {...props} />,
  p: props => <Text color="mdx.p" mt={1} mb={3} fontSize={2} {...props} />,

  a: props => <Link color="mdx.a" {...props} />,
  table: props => <Table mx="auto" {...props} />,

  ol: OrderedList,
  ul: UnorderedList,
  li: ListItem,

  blockquote: Blockquote,
  inlineCode: Code,
  code: CodeBlock
}

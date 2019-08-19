/** @jsx jsx */
import { jsx, Footer, Container, Styled } from 'theme-ui'

export default () => (
  <Footer
    sx={{
      color: 'background',
      bg: 'text',
      mt: [3, 4, 5],
      py: [3, 4, 5]
    }}
  >
    <Container
      sx={{
        textAlign: 'center'
      }}
    >
      <Styled.p
        sx={{
          color: 'background'
        }}
      >
        Powered by <Styled.a href="https://gatsbyjs.org">Gatsby</Styled.a>
      </Styled.p>
    </Container>
  </Footer>
)

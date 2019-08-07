/** @jsx jsx */
import { jsx, Footer, Container, Styled } from 'theme-ui'

export default () => (
  <Footer
    sx={{
      mt: [3, 4, 5],
      py: [3, 4, 5],
      borderTop: 'thin solid',
      borderColor: 'muted'
    }}
  >
    <Container
      sx={{
        textAlign: 'center'
      }}
    >
      <Styled.p>
        Powered by <Styled.a href="https://gatsbyjs.org">Gatsby</Styled.a>
      </Styled.p>
    </Container>
  </Footer>
)

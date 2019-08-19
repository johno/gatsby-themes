/** @jsx jsx */
import { jsx, Footer, Container, Styled } from 'theme-ui'

export default () => (
  <Footer>
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

/** @jsx jsx */
import { jsx, Main, Styled } from 'theme-ui'

import Header from './header'
import Footer from './footer'

export default ({ children }) => (
  <Styled.root>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Styled.root>
)

/** @jsx jsx */
import { jsx, Main } from 'theme-ui'

import Header from './header'
import Footer from './footer'

export default ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
)

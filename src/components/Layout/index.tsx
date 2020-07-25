import React from 'react';
import { ThemeProvider } from 'styled-components';

import Theme from './theme';
import GlobalStyles from './global';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import { Wrapper, Main } from './styles';

interface Props {
  children?: any;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Wrapper>
          <Navbar />
          <Main>{children}</Main>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default Layout;

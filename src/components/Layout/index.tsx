import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

interface Props {
  children?: any;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

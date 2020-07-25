import React from 'react';
import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      © {new Date().getFullYear()} Built with
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Container>
  );
};

export default Footer;

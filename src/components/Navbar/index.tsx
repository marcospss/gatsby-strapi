import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Navbar = () => {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );
  return (
    <nav>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </nav>
  );
};

export default Navbar;

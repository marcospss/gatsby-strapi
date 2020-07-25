import * as React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { Header, Logo, Nav, List, NavItem } from './styles';

interface category {
  id: string;
  slug: string;
  shortName: string;
}

interface StaticQueryProps {
  readonly site: {
    siteMetadata: {
      title: string;
    };
  };
  readonly allStrapiCategories: {
    nodes: category[];
  };
}

const HeaderGlobal: React.FC = () => (
  <StaticQuery
    query={graphql`
      {
        allStrapiCategories {
          nodes {
            slug
            shortName
            id
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => {
      const {
        site: {
          siteMetadata: { title },
        },
        allStrapiCategories: { nodes: categories },
      } = data;
      return (
        <Header>
          <Logo title="Back to home">
            <AniLink fade to={`/`}>
              {title}
            </AniLink>
          </Logo>
          <Nav>
            <List>
              {categories.map(category => {
                return (
                  <NavItem key={category.id}>
                    <AniLink fade to={`/category/${category.slug}`}>
                      {category.shortName}
                    </AniLink>
                  </NavItem>
                );
              })}
            </List>
          </Nav>
        </Header>
      );
    }}
  />
);

export default HeaderGlobal;

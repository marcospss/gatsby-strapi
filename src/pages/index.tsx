import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

interface category {
  id: string;
  title: string;
  metaDescription: string;
  created_at: string;
  slug: string;
}

interface Props {
  readonly data: {
    allStrapiCategories: {
      nodes: category[];
    };
  };
}

const IndexPage: React.FC<Props> = ({ data }) => {
  const {
    allStrapiCategories: { nodes: categories },
  } = data;
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <h1>Home</h1>
        {categories.map(category => {
          return (
            <div key={category.id}>
              <h2>{category.title}</h2>
              <p>{category.metaDescription}</p>
              <p>{category.created_at}</p>
              <p>
                <Link to={`/category/${category.slug}`}>Read More</Link>
              </p>
            </div>
          );
        })}
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    allStrapiCategories(filter: { status: { eq: true } }) {
      nodes {
        slug
        title
        metaDescription
        id
        created_at(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;

export default IndexPage;

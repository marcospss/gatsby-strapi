import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import List from 'components/ListCategory';

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
        <List data={categories} />
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

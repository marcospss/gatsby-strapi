import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

interface category {
  id: string;
  title: string;
}

const BlogIndex = () => {
  const {
    allStrapiCategories: { nodes: categories },
  } = useStaticQuery(
    graphql`
      query {
        allStrapiCategories(filter: { status: { eq: true } }) {
          nodes {
            id
            slug
            title
            metaDescription
          }
        }
      }
    `
  );
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <h1>Home</h1>
        {categories.map((category: category) => {
          return <h2 key={category.id}>{category.title}</h2>;
        })}
      </Layout>
    </>
  );
};

export default BlogIndex;

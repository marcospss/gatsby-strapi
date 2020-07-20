import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';

interface content {
  created_at: string;
  description: string;
  id: string;
  metaDescription: string;
  metaKeywords: string;
  slug: string;
  title: string;
}

type Props = {
  readonly data: {
    categoryBySlug: content;
    contentsByCategory: {
      nodes: content[];
    };
  };
};

const CategoryTemplate: React.FC<Props> = ({ data }) => {
  const {
    categoryBySlug: { title, metaDescription },
    contentsByCategory: { nodes: contents },
  } = data;
  return (
    <>
      <SEO title={title} />
      <Layout>
        <h1>{title}</h1>
        <p>{metaDescription}</p>
        <hr />
        {contents.map(content => {
          return (
            <div key={content.id}>
              <h2>{content.title}</h2>
              <p>{content.metaDescription}</p>
              <p>{content.created_at}</p>
              <p>
                <Link to={`/${content.slug}`}>Read More</Link>
              </p>
            </div>
          );
        })}
      </Layout>
    </>
  );
};

export const query = graphql`
  query getContentCategory($slug: String) {
    categoryBySlug: strapiCategories(slug: { eq: $slug }) {
      title
      description
      metaDescription
      metaKeywords
      slug
      id
      created_at(formatString: "MMMM Do, YYYY")
    }
    contentsByCategory: allStrapiContents(
      filter: {
        category_id: { slug: { eq: $slug }, status: { eq: true } }
        status: { eq: true }
      }
    ) {
      nodes {
        id
        metaDescription
        metaKeywords
        slug
        title
        created_at(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;

export default CategoryTemplate;

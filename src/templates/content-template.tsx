import React from 'react';
import { graphql, Link } from 'gatsby';

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

interface pageContext {
  slug: string;
  categorySlug: string;
}

interface categoryContent {
  id: string;
  title: string;
  metaDescription: string;
  created_at: string;
  slug: string;
}

type Props = {
  readonly data: {
    content: content;
    categoryContent: {
      nodes: categoryContent[];
    };
  };
  readonly pageContext?: pageContext;
};

const ContentTemplate: React.FC<Props> = ({ data }) => {
  const {
    content: { title, metaDescription, id, created_at },
    categoryContent: { nodes: similarContent },
  } = data;
  return (
    <>
      <SEO title={title} />
      <Layout>
        <h1>{title}</h1>
        <p>{metaDescription}</p>
        <hr />
        <div key={id}>
          <h2>{title}</h2>
          <p>{metaDescription}</p>
          <p>{created_at}</p>
        </div>
        <hr />
        <h1>Similar Content</h1>
        {similarContent.map(content => {
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
  query getContentBySlug($slug: String!, $categorySlug: String) {
    content: strapiContents(slug: { eq: $slug }) {
      title
      description
      metaDescription
      metaKeywords
      slug
      id
      created_at(formatString: "MMMM Do, YYYY")
    }
    categoryContent: allStrapiContents(
      filter: {
        slug: { ne: $slug }
        category_id: { slug: { eq: $categorySlug } }
      }
    ) {
      nodes {
        id
        metaDescription
        slug
        title
        created_at(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;

export default ContentTemplate;

import React from 'react';
import { graphql } from 'gatsby';

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
    content: content;
  };
};

const ContentTemplate: React.FC<Props> = ({ data }) => {
  const {
    content: { title, metaDescription, id, created_at },
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
      </Layout>
    </>
  );
};

export const query = graphql`
  query getContentBySlug($slug: String) {
    content: strapiContents(slug: { eq: $slug }) {
      title
      description
      metaDescription
      metaKeywords
      slug
      id
      created_at(formatString: "MMMM Do, YYYY")
    }
  }
`;

export default ContentTemplate;

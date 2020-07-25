import React from 'react';
import { graphql } from 'gatsby';

import { Container, TitleMain, Description } from 'css';
import Layout from 'components/Layout';
import SEO from 'components/Seo';
import ListSimilar from 'components/ListSimilar';

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
    categoryBySlug: { title, description },
    contentsByCategory: { nodes: contents },
  } = data;
  return (
    <>
      <SEO title={title} />
      <Layout>
        <Container>
          <TitleMain>{title}</TitleMain>
          <Description>{description}</Description>
          <ListSimilar data={contents} />
        </Container>
      </Layout>
    </>
  );
};

export const query = graphql`
  query getContentCategory($slug: String!) {
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

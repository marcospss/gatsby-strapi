import React from 'react';
import { graphql } from 'gatsby';

import {
  Container,
  TitleMain,
  CreatedAt,
  Description,
  TitleSecondary,
} from 'css';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
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
        <Container>
          <TitleMain>{title}</TitleMain>
          <CreatedAt>{created_at}</CreatedAt>
          <Description>{metaDescription}</Description>
          <TitleSecondary>Similar Content</TitleSecondary>
          <ListSimilar data={similarContent} />
        </Container>
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

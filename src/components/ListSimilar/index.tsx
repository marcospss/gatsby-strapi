import React from 'react';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { Container, Content } from './styles';

interface content {
  id: string;
  title: string;
  metaDescription: string;
  created_at: string;
  slug: string;
}

interface Props {
  readonly data: content[];
}

const ListSimilar: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      {data.map(content => {
        return (
          <Content key={content.id}>
            <h2>{content.title}</h2>
            <span>{content.created_at}</span>
            <p>{content.metaDescription}</p>
            <p>
              <AniLink fade to={`/${content.slug}`} title={content.title}>
                Read More
              </AniLink>
            </p>
          </Content>
        );
      })}
    </Container>
  );
};

export default ListSimilar;

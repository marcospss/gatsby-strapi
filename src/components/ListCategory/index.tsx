import React from 'react';
import { Link } from 'gatsby';

import { Container, Wrapper } from 'css';

import { Card, Title, Date, Description, LearnMore } from './styles';

interface category {
  id: string;
  title: string;
  metaDescription: string;
  created_at: string;
  slug: string;
}

interface Props {
  readonly data: category[];
}

const ListCategory: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        {data.map(category => {
          return (
            <Card key={category.id}>
              <Title>
                <Link to={`/category/${category.slug}`}>{category.title}</Link>
              </Title>
              <Date>{category.created_at}</Date>
              <Description>{category.metaDescription}</Description>
              <LearnMore>
                <Link to={`/category/${category.slug}`}>Read More</Link>
              </LearnMore>
            </Card>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default ListCategory;

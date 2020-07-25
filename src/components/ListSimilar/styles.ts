import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
`;

export const Content = styled.article`
  width: 49%;
  background: ${({ theme: { colors } }) => colors.gray030};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 6px 0px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  border: 1px solid ${({ theme: { colors } }) => colors.gray030};
  margin: 1rem 0;
  padding: 20px;
  h2 {
    margin: 0.5rem 0;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray};
    padding-bottom: 0.5rem;
  }
  span {
    display: inline-block;
    width: 100%;
    text-align: right;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  p {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 0.9rem;
    color: ${({ theme: { colors } }) => colors.primary};
    &:hover {
      text-decoration: underline;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 1.5rem;
  background-color: ${({ theme: { colors } }) => colors.fourth};
  color: ${({ theme: { colors } }) => colors.white};
  text-transform: uppercase;
  a {
    text-decoration: none;
    margin: 0 5px;
    color: ${({ theme: { colors } }) => colors.white};
    &:hover {
      text-decoration: underline;
    }
  }
`;

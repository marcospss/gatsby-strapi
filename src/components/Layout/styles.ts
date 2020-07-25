import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.body};
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  min-height: 100vh;
  margin: 3.2rem auto 0;
`;

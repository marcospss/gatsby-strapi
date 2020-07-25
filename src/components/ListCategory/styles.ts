import styled from 'styled-components';

export const Card = styled.section`
  position: relative;
  display: block;
  flex-flow: column;
  width: 360px;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

export const Title = styled.h2`
  width: 100%;
  font-size: 1.2rem;
  margin: 0px;
  padding: 15px 14px 10px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray};
  text-transform: uppercase;
  a {
    text-decoration: none;
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;

export const Date = styled.p`
  width: 100%;
  font-size: 0.8rem;
  margin: 0px;
  padding: 10px 20px 0 14px;
  font-weight: bold;
  text-align: right;
`;

export const Description = styled.p`
  line-height: 18px;
  padding: 5px 14px 10px;
  height: 100vh;
  max-height: 80px;
`;

export const LearnMore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  a {
    width: 100%;
    height: 100%;
    background-color: ${({ theme: { colors } }) => colors.black060};
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    padding: 1rem;
    color: ${({ theme: { colors } }) => colors.white};
    &:hover {
      background-color: ${({ theme: { colors } }) => colors.darkBlue};
    }
  }
`;

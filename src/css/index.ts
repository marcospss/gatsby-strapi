import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  background-color: ${({ theme: { colors } }) => colors.white};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  padding: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

export const TitleMain = styled.h1`
  width: 100%;
  font-size: 1.5rem;
  margin: 0 0 20px 0;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray};
  padding-bottom: 0.5rem;
`;

export const TitleSecondary = styled.h2`
  width: 100%;
  font-size: 1.2rem;
  margin: 0;
  padding-bottom: 0.5rem;
`;

export const Description = styled.p`
  width: 100%;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0 0 2rem 0;
`;

export const CreatedAt = styled.span`
  display: inline-block;
  width: 100%;
  text-align: right;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

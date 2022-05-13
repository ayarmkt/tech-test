import styled from 'styled-components';

export const StyledHero = styled.section`
  width: 100%;
  height: 60vh;
  text-align: center;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font: ${({ theme }) => theme.fonts.mainTitle};
  }

  p {
    margin: 25px 0;
  }
`;

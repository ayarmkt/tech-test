import styled from 'styled-components';

export const StyledHero = styled.div`
  width: 100%;
  text-align: center;
  padding: 25px 0;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font: ${({ theme }) => theme.title.font};
  }

  p {
    margin: 25px 0;
  }
`;

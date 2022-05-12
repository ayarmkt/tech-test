import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
  font: ${({ theme }) => theme.nav.font};

  a {
    display: flex;
    align-items: center;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 3vw;
    list-style: none;
  }
`;

export const StyledLogin = styled.button`
  color: ${({ theme }) => theme.colors.purple};
  background-color: transparent;
  border: none;
  margin-right: 3vw;
`;

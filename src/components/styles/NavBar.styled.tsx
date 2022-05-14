import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: ${({ theme }) => theme.fonts.nav};

  a {
    display: flex;
    align-items: center;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 3vw;
    list-style: none;

    li {
      font: ${({ theme }) => theme.fonts.nav};
    }
  }

  button {
    font: ${({ theme }) => theme.fonts.nav};
  }
`;

export const StyledLoginBtn = styled.button`
  color: ${({ theme }) => theme.colors.purple};
  background-color: transparent;
  border: none;
  margin-right: 3vw;
`;

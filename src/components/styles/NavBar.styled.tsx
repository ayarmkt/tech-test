import styled from 'styled-components';
import Button from '../../UI/Button';

export const StyledNavBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: ${({ theme }) => theme.fonts.nav};

  ul {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 3vw;
    list-style: none;

    li {
      font: ${({ theme }) => theme.fonts.nav};

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const StyledHomeLink = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledLoginBtn = styled.button`
  color: ${({ theme }) => theme.colors.purple};
  background-color: transparent;
  border: none;
  margin-right: 3vw;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledTrialBtn = styled(Button)`
  font: ${({ theme }) => theme.fonts.nav};
`;

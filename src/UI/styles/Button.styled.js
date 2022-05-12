import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  font-family: ${({ theme }) => theme.button.fontFamily};
  font-weight: ${({ theme }) => theme.button.fontWeight};
  border-radius: 8px;
  color: white;
  border: none;
  box-shadow: 0px 2px 5px rgba(27, 27, 26, 0.08),
    0px 1px 1px rgba(27, 27, 26, 0.12),
    0px 0px 0px 1px ${({ theme }) => theme.colors.purple};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
`;

//   background-color: var(--purple);

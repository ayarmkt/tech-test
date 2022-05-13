import styled from 'styled-components';

export const StyledButton = styled.button`
  font: ${({ theme }) => theme.fonts.button};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 8px;
  color: white;
  border: none;
  box-shadow: 0px 2px 5px rgba(27, 27, 26, 0.08),
    0px 1px 1px rgba(27, 27, 26, 0.12),
    0px 0px 0px 1px ${({ bgColor }) => bgColor};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
`;

//   background-color: var(--purple);
//${({ theme }) => theme.fonts.button}]
//  font: 500 18px Inter;

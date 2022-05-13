import styled from 'styled-components';

export const StyledMouseName = styled.div`
  width: auto;
  height: 26px;
  padding: 5px 10px;
  background-color: black;
  border-radius: 8px;
  position: relative;
  top: -5px;
  left: 30px;
  font: 600 12px Inter;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ bgColor }) => bgColor};
`;

import styled from 'styled-components';
import { Props } from '../Mouse';

interface IMouseName {
  bgColor: Props['bgColor'];
}

export const StyledMouseName = styled.div<IMouseName>`
  width: auto;
  height: 26px;
  padding: 5px 10px;
  background-color: black;
  border-radius: 8px;
  position: absolute;
  top: 20px;
  left: 20px;
  font: 600 12px Inter;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ bgColor }) => bgColor};
`;

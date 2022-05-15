import styled from 'styled-components';
import Mouse from '../../UI/Mouse';

interface IMouse {
  topPos: string;
  leftPos: string;
}

export const StyledHero = styled.section`
  width: 100%;
  height: 550px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin: 25px 0;
  }
`;

export const StyledHeroTitle = styled.h1`
  font: ${({ theme }) => theme.fonts.mainTitle};
  position: relative;
`;

export const StyledMouse = styled(Mouse)<IMouse>`
  position: absolute;
  top: ${({ topPos }) => topPos};
  left: ${({ leftPos }) => leftPos};
`;

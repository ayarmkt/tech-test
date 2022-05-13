import styled from 'styled-components';
import Mouse from '../../UI/Mouse';

export const StyledHero = styled.section`
  width: 100%;
  height: 60vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  h1 {
    font: ${({ theme }) => theme.fonts.mainTitle};
  }

  p {
    margin: 25px 0;
  }
`;

export const StyledMouse = styled(Mouse)`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

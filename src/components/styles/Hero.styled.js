import styled from 'styled-components';
import Mouse from '../../UI/Mouse';

export const StyledHero = styled.section`
  width: 100%;
  height: 500px;
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
`;

export const StyledMouse = styled(Mouse)`
  position: relative;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

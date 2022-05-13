import styled from 'styled-components';

export const StyledPushTrialSection = styled.section`
  height: 40vh;
  width: 100%;

  border: 1px solid red;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 12px;
  padding: 0 25px;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: space-evenly;
  align-items: center;
  position: relative;

  p {
    font: ${({ theme }) => theme.fonts.contentLabel};
    color: ${({ theme }) => theme.colors.purple};
  }

  ul {
    list-style: none;
    display: flex;
    order: ${({ order }) => order};

    li {
      font: ${({ theme }) => theme.fonts.textSmall};
      color: ${({ color }) => color};
      padding: 0 10px;
    }
  }
`;

export const StyledBGText = styled.p`
  font: 800 168px Manrope;
  color: white;
  opacity: 0.08;
  line-height: 0.8;
  position: absolute;
  top: 15%;
  left: -5%;
`;

//padding: 0 25px;
//background-color: ${({ theme }) => theme.colors.purple};
//justify-content: ${({ justifyContent }) => justifyContent}
// order: ${({ order }) => order};

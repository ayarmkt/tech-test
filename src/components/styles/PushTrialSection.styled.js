import styled from 'styled-components';

export const StyledPushTrialSection = styled.section`
  height: 35vh;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 12px;
  padding: 0 25px;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  margin: 100px 0;

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

  button {
    margin: 40px 0;
  }
`;

export const StyledAdditionalText = styled.p`
  font: ${({ theme }) => theme.fonts.contentLabel};
  color: ${({ theme }) => theme.colors.purple};
`;

export const StyledBGText = styled.p`
  font: 800 168px Manrope;
  color: white;
  opacity: 0.08;
  line-height: 0.8;
  position: absolute;
  top: 80px;
  left: -20px;
`;

//padding: 0 25px;
//background-color: ${({ theme }) => theme.colors.purple};
//justify-content: ${({ justifyContent }) => justifyContent}
// order: ${({ order }) => order};

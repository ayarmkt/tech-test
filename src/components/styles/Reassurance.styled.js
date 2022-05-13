import styled from 'styled-components';

export const StyledReassuranceContainer = styled.section`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  p {
    font: ${({ theme }) => theme.fonts.textSmall};
  }

  div {
    display: flex;
    align-items: center;

    img {
      height: 20px;
      margin: 0 15px;
    }
  }
`;

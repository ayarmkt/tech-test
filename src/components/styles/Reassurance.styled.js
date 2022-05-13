import styled from 'styled-components';

export const StyledReassuranceContainer = styled.section`
  height: 100px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  p {
    font: ${({ theme }) => theme.fonts.textSmall};
    border: 1px solid red;
  }

  div {
    border: 1px solid red;
    display: flex;
    align-items: center;

    img {
      height: 20px;
      margin: 0 15px;
    }
  }
`;

//  display: flex;
// flex-direction: column;
// align-items: center;

// display: grid;
// grid-template-row: repeat(2, 1fr);
// grid-gap: 10px;
// align-items: center;
// justify-content: center;

// grid-row: 1;
//grid-row: 2;

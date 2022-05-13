import styled from 'styled-components';

export const StyledFeatureDetailsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
`;

export const StyledDetailsText = styled.div`
  margin: 100px 0;
  text-align: center;

  p {
    margin-top: 25px;
  }
`;

export const StyledDetailsContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 120px;
  margin-bottom: 70px;
`;

export const StyledArticle = styled.article`
  border-radius: 12px;
  text-align: start;
  background-color: ${({ bgColor }) => bgColor};
  grid-row: ${({ span }) => `span ${span}`};
  box-shadow: 0px 2px 5px rgba(27, 27, 26, 0.08),
    0px 1px 1px rgba(27, 27, 26, 0.12), 0px 0px 0px 1px rgba(27, 27, 26, 0.12);
  display: grid;
  grid-template-rows: 1fr auto auto;

  img {
    padding: 0 10px;
    width: 100%;
    grid-row: 1;
    align-self: center;
  }

  div {
    padding: 30px;

    h3 {
      font: ${({ theme }) => theme.fonts.contentTitle};
      color: ${({ color }) => color};
      grid-row: 2;
    }

    p {
      font: ${({ theme }) => theme.fonts.textSmall};
      color: ${({ color }) => color};
      grid-row: 3;
    }
  }
`;

// grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
// grid-template-columns: repeat(3, 1fr);
//grid-row: ${({ span }) => `span${span}`};
//grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));

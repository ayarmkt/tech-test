import styled from 'styled-components';

export const StyledFeatureDetailsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;

  div {
    margin: 100px 0;
    border: 1px solid red;
    text-align: center;
  }
`;

export const StyledDetailsContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
`;

export const StyledArticle = styled.article`
  border-radius: 12px;
  border: 1px solid red;
  text-align: start;
  background-color: ${({ bgColor }) => bgColor};
  grid-row: ${({ span }) => `span ${span}`};

  h3 {
    font: ${({ theme }) => theme.fonts.contentTitle};
    color: ${({ color }) => color};
  }

  p {
    font: ${({ theme }) => theme.fonts.textSmall};
    color: ${({ color }) => color};
  }
`;

// grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
// grid-template-columns: repeat(3, 1fr);
//grid-row: ${({ span }) => `span${span}`};
//grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));

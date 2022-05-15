import styled from 'styled-components';

interface IStyledArticle {
  color: string;
  bgColor: string;
  spanAmount: number;
}

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
  grid-auto-rows: 140px;
  margin-bottom: 70px;
`;

export const StyledArticle = styled.article<IStyledArticle>`
  border-radius: 12px;
  text-align: start;
  background-color: ${({ bgColor }) => bgColor};
  grid-row: ${({ spanAmount }) => `span ${spanAmount}`};
  box-shadow: 0px 2px 5px rgba(27, 27, 26, 0.08),
    0px 1px 1px rgba(27, 27, 26, 0.12), 0px 0px 0px 1px rgba(27, 27, 26, 0.12);
  display: grid;
  grid-template-rows: 1fr auto auto;
  padding: 30px;

  img {
    width: 100%;
    grid-row: 1;
    align-self: center;
  }

  div {
    h3,
    p {
      color: ${({ color }) => color};
    }

    h3 {
      font: ${({ theme }) => theme.fonts.contentTitle};
      grid-row: 2;
    }

    p {
      font: ${({ theme }) => theme.fonts.textSmall};
      grid-row: 3;
    }
  }
`;

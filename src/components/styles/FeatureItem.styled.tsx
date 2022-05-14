import styled from 'styled-components';

interface IFeatureItem {
  direction: string;
}

export const StyledFeatureItem = styled.article<IFeatureItem>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  padding: 40px 0;

  img {
    width: 60%;
  }
`;

export const StyledTextSection = styled.div`
  width: 30%;
`;

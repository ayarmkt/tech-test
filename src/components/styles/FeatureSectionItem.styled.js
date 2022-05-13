import styled from 'styled-components';

export const StyledFeatureItemSection = styled.article`
  height: 50vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  margin-top: 50px;

  img {
    width: 50%;
  }
`;

export const StyledTextSection = styled.div`
  width: 35%;
`;

export const StyledImageSection = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 12px;
  width: 60%;
  height: 90%;
`;

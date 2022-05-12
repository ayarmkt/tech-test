import styled from 'styled-components';

export const StyledFeatureSection = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid red;
  flex-direction: ${({ direction }) => direction};
`;

export const StyledLabel = styled.h3`
  color: ${({ color }) => color};
`;

export const StyledImageSection = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 12px;
  width: 80%;
  height: 90%;
`;

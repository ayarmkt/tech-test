import styled from 'styled-components';

export const StyledSubTitle = styled.h2`
  font: ${({ theme }) => theme.subTitle.font};
  color: ${({ color }) => color};
`;

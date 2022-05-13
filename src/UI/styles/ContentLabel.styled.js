import styled from 'styled-components';

export const StyledContentLabel = styled.h4`
  color: ${({ color }) => color};
  font: ${({ theme }) => theme.fonts.contentLabel};
`;

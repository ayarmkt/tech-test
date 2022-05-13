import styled from 'styled-components';

export const StyledSectionTitle = styled.h2`
  font: ${({ theme }) => theme.fonts.sectionTitle};
  color: ${({ color }) => color};
  width: ${({ width }) => width};
  text-align: ${({ textAlign }) => textAlign};
`;

import styled from 'styled-components';
import { Props } from '../ContentLabel';

interface IContentLabel {
  color: Props['color'];
}

export const StyledContentLabel = styled.h4<IContentLabel>`
  color: ${({ color }) => color};
  font: ${({ theme }) => theme.fonts.contentLabel};
`;

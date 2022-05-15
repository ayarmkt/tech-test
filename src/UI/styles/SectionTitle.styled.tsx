import styled from 'styled-components';
import { Props } from '../SectionTitle';

interface ISectionTitle {
  color: Props['color'];
  widthAmount: Props['widthAmount'];
  textAlignSetting: Props['textAlignSetting'];
}

export const StyledSectionTitle = styled.h2<ISectionTitle>`
  font: ${({ theme }) => theme.fonts.sectionTitle};
  color: ${({ color }) => color};
  width: ${({ widthAmount }) => widthAmount};
  text-align: ${({ textAlignSetting }) => textAlignSetting};
`;

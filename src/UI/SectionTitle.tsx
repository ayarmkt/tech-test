import React from 'react';
import { StyledSectionTitle } from './styles/SectionTitle.styled';

export interface Props {
  sectionTitleText: string;
  color?: string;
  widthAmount?: string;
  textAlignSetting?: string;
}

const SectionTitle: React.FC<Props> = ({
  sectionTitleText,
  color,
  widthAmount,
  textAlignSetting,
}) => {
  return (
    <StyledSectionTitle
      color={color}
      widthAmount={widthAmount}
      textAlignSetting={textAlignSetting}
    >
      {sectionTitleText}
    </StyledSectionTitle>
  );
};

export default SectionTitle;

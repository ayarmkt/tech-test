import React from 'react';
import Button from '../UI/Button';
import SectionTitle from '../UI/SectionTitle';
import {
  StyledPushTrialSection,
  StyledBGText,
  StyledAdditionalText,
} from './styles/PushTrialSection.styled';
import { BsCheck2 } from 'react-icons/bs';

export interface Props {
  bgColor?: string;
  color?: string;
  flexDirection: string;
  textAlignSetting?: string;
  btnColor: string;
  showAdditionalText: boolean;
  showBGText: boolean;
  showInfoAtTheEnd: boolean;
}

const PushTrialSection: React.FC<Props> = ({
  bgColor,
  color,
  flexDirection,
  textAlignSetting,
  btnColor,
  showAdditionalText,
  showBGText,
  showInfoAtTheEnd,
}) => {
  const iconStyle = { fill: color, verticalAlign: 'middle' };

  return (
    <StyledPushTrialSection
      bgColor={bgColor}
      color={color}
      order={showInfoAtTheEnd ? 1 : 0}
      flexDirection={flexDirection}
    >
      {showAdditionalText && (
        <StyledAdditionalText>What are you waiting for?</StyledAdditionalText>
      )}
      <SectionTitle
        sectionTitleText='Start your free Homerun trial today'
        color={color}
        widthAmount='450px'
        textAlignSetting={textAlignSetting}
      />
      <ul>
        <li>
          <BsCheck2 style={iconStyle} /> Totally free for 15 days
        </li>
        <li>
          <BsCheck2 style={iconStyle} /> No credit card needed
        </li>
      </ul>
      <Button
        text='Get started — It’s free!'
        height='56px'
        padding='0 25px'
        bgColor={btnColor}
      />
      {showBGText && (
        <StyledBGText>
          Get
          <br />
          started
        </StyledBGText>
      )}
    </StyledPushTrialSection>
  );
};

export default PushTrialSection;

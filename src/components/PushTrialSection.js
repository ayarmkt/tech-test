import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Button from '../UI/Button';
import SectionTitle from '../UI/SectionTitle';
import { StyledPushTrialSection } from './styles/PushTrialSection.styled';
import { BsCheck2 } from 'react-icons/bs';
import { StyledBGText } from './styles/PushTrialSection.styled';
import { StyledAdditionalText } from './styles/PushTrialSection.styled';

const PushTrialSection = ({
  bgColor,
  color,
  order,
  flexDirection,
  textAlign,
  btnColor,
  showAdditionalText,
  showBGText,
}) => {
  const themeContext = useContext(ThemeContext);

  const iconStyle = { fill: color, verticalAlign: 'middle' };

  return (
    <StyledPushTrialSection
      bgColor={bgColor}
      color={color}
      order={order}
      flexDirection={flexDirection}

      //justifyContent={flexDirection === 'row' ? 'space-evenly' : 'center'}
    >
      {showAdditionalText && (
        <StyledAdditionalText>What are you waiting for?</StyledAdditionalText>
      )}
      <SectionTitle
        sectionTitleText='Start your free Homerun trial today'
        color={color}
        width='450px'
        textAlign={textAlign}
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

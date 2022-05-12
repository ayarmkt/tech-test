import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import SubTitle from '../UI/SubTitle';
import {
  StyledImageSection,
  StyledFeatureSection,
  StyledLabel,
} from './styles/FeatureSection.styled';

const FeatureSection = ({ label, title, text, index, color }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <StyledFeatureSection direction={index % 2 === 0 ? 'row' : 'row-reverse'}>
      <div>
        <StyledLabel color={color}>{label}</StyledLabel>
        <SubTitle text={title} color={themeContext.colors.black} />
        <p>{text}</p>
      </div>
      <StyledImageSection>aa</StyledImageSection>
    </StyledFeatureSection>
  );
};

export default FeatureSection;

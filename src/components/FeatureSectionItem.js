import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ContentLabel from '../UI/ContentLabel';
import SectionTitle from '../UI/SectionTitle';
import { StyledImageSection } from './styles/FeatureSectionItem.styled';
import { StyledFeatureItemSection } from './styles/FeatureSectionItem.styled';
import { StyledTextSection } from './styles/FeatureSectionItem.styled';

const FeatureSectionItem = ({ index, label, title, text, color, image }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <StyledFeatureItemSection
      direction={index % 2 === 0 ? 'row' : 'row-reverse'}
    >
      <StyledTextSection>
        <ContentLabel labelText={label} color={color} />
        <SectionTitle
          sectionTitleText={title}
          color={themeContext.colors.black}
        />
        <p>{text}</p>
      </StyledTextSection>
      <img src={image} alt={label} />
    </StyledFeatureItemSection>
  );
};

export default FeatureSectionItem;

// <StyledImageSection></StyledImageSection>

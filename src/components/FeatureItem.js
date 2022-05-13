import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ContentLabel from '../UI/ContentLabel';
import SectionTitle from '../UI/SectionTitle';
import { StyledImageSection } from './styles/FeatureItem.styled';
import { StyledFeatureItem } from './styles/FeatureItem.styled';
import { StyledTextSection } from './styles/FeatureItem.styled';

const FeatureItem = ({ index, label, title, text, color, image }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <StyledFeatureItem direction={index % 2 === 0 ? 'row' : 'row-reverse'}>
      <StyledTextSection>
        <ContentLabel labelText={label} color={color} />
        <SectionTitle
          sectionTitleText={title}
          color={themeContext.colors.black}
        />
        <p>{text}</p>
      </StyledTextSection>
      <img src={image} alt={label} />
    </StyledFeatureItem>
  );
};

export default FeatureItem;

// <StyledImageSection></StyledImageSection>

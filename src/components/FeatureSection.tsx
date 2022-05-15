import React from 'react';
import { sectionContent } from '../data/section-content';
import FeatureItem from './FeatureItem';
import { StyledFeatureSection } from './styles/FeatureSection.styled';

const FeatureSection: React.FC = () => {
  return (
    <StyledFeatureSection>
      {sectionContent.map((content, index) => (
        <FeatureItem
          key={index}
          index={index}
          label={content.label}
          title={content.title}
          text={content.text}
          color={content.color}
          image={content.image}
        />
      ))}
    </StyledFeatureSection>
  );
};

export default FeatureSection;

import { sectionContent } from '../data/section-content';
import FeatureSectionItem from './FeatureSectionItem';
import { StyledFeatureSection } from './styles/FeatureSection.styled';

const FeatureSection = () => {
  return (
    <section>
      {sectionContent.map((content, index) => (
        <FeatureSectionItem
          key={index}
          index={index}
          label={content.label}
          title={content.title}
          text={content.text}
          color={content.color}
          image={content.image}
        />
      ))}
    </section>
  );
};

export default FeatureSection;

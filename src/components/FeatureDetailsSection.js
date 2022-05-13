import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import SectionTitle from '../UI/SectionTitle';
import {
  StyledFeatureDetailsSection,
  StyledDetailsContainer,
  StyledArticle,
  StyledDetailsText,
} from './styles/FeatureDetailsSection.styled';
import { detailItems } from '../data/detail-items';

const FeatureDetailsSection = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <StyledFeatureDetailsSection>
      <StyledDetailsText>
        <SectionTitle
          sectionTitleText='But wait. There is more'
          color={themeContext.colors.black}
        />
        <p>
          Leverage winning strategies to best promote jobs.
          <br />
          Find the ideal candidate faster.
        </p>
      </StyledDetailsText>
      <StyledDetailsContainer>
        {detailItems.map((item, index) => (
          <StyledArticle
            key={index}
            span={item.span}
            bgColor={themeContext.colors[`${item.bgColor}`]}
            color={
              item.bgColor === 'white'
                ? themeContext.colors.black
                : themeContext.colors.white
            }
          >
            <img src={item.image} alt='editor'></img>
            <h3>{item.label}</h3>
            <p>{item.text}</p>
          </StyledArticle>
        ))}
      </StyledDetailsContainer>
    </StyledFeatureDetailsSection>
  );
};

export default FeatureDetailsSection;

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import SectionTitle from '../UI/SectionTitle';
import {
  StyledFeatureDetailsSection,
  StyledDetailsContainer,
  StyledArticle,
  StyledDetailsText,
} from './styles/FeatureDetailsSection.styled';
import { detailItems } from '../data/detail-items';

const FeatureDetailsSection: React.FC = (): JSX.Element => {
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
            spanAmount={item.span}
            bgColor={themeContext.colors[`${item.bgColor}`]}
            color={
              item.bgColor === 'white'
                ? themeContext.colors.black
                : themeContext.colors.white
            }
          >
            <img src={item.image} alt='editor'></img>
            <div>
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </div>
          </StyledArticle>
        ))}
      </StyledDetailsContainer>
    </StyledFeatureDetailsSection>
  );
};

export default FeatureDetailsSection;
